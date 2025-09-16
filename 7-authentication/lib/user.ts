import db from "./db"

export const createUser = async (email: string, password: string) => {
  const result = await db.prepare(`INSERT INTO users (email, password) VALUES (?, ?)`).run(email, password)
  return { id: result.lastInsertRowid, email }
}