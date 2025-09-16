import { Lucia } from "lucia";
import { BetterSqlite3Adapter } from '@lucia-auth/adapter-sqlite'
import db from "./db";
import { cookies } from "next/headers";

/** This adapter is needed to create a lucia instance based on the sqlite database configuration */
const sqliteAdapter = new BetterSqlite3Adapter(db, {
  user: 'users',
  session: 'sessions'
})

/** 
 * Here you are creating an lucia instance based on the provided adapter
 * And configuring the session cookie instance
 * JUST TO HAVE IN MIND: Lucia is not longer an usable library for auth
 * (as is stated in https://lucia-auth.com/lucia-v3/migrate)
 */
const luciaInstance = new Lucia(sqliteAdapter, {
  sessionCookie: {
    expires: false,
    attributes: {
      secure: process.env.NODE_ENV === 'production',
    }
  }
});

export async function createAuthSession(userId: string) {
  /**
   * Using a luciaInstance to create a session and set the session cookie
   * the created session will provide an id that can be used to identify the user
   * and create a session cookie that will be stored in the browser
   * and sent with each request to the server
   * The cookie object will be created in async way and will be set in the response headers after
   */
  const sessionResponse = await luciaInstance.createSession(userId, { });
  const sessionCookie = luciaInstance.createSessionCookie(sessionResponse.id);
  (await cookies()).set(
    sessionCookie.name,
    sessionCookie.value,
    sessionCookie.attributes
  )
  return sessionResponse;
}

export async function verifyAuthSession() {
  // For this part, first you need to get the cookies from the request headers
  const cookieSession = (await cookies()).get(luciaInstance.sessionCookieName);

  if (cookieSession === undefined) {
    return {
      user: null,
      session: null
    }
  } else {
    // In case the cookie is defined, you can get the value of the cookie as a sessionID
    const sessionId = cookieSession.value;

    if (sessionId === undefined) {
      return {
        user: null,
        session: null
      }
    }

    // If the sessionId is defined, you can validate the session using the luciaInstance
    const sessionResult = await luciaInstance.validateSession(sessionId);

    // In case the session is valid and fresh, you can renew the session cookie
    // Otherwise, you can set a blank session cookie to remove the existing one
    if (sessionResult.session && sessionResult.session.fresh) {
      const renewCookieResponse = luciaInstance.createSessionCookie(sessionResult.session.id)
      
      await cookies().set(
        renewCookieResponse.name,
        renewCookieResponse.value,
        renewCookieResponse.attributes
      )
    } else {
      const blankSessionCookie = luciaInstance.createBlankSessionCookie()

      await cookies().set(
        blankSessionCookie.name,
        blankSessionCookie.value,
        blankSessionCookie.attributes
      )
    }

    return sessionResult
  }
}