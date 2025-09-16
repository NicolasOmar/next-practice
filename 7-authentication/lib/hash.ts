
import crypto from 'node:crypto';

export function hashUserPassword(password: string): string {
  const salt: string = crypto.randomBytes(16).toString('hex');
  const hashedPassword: Buffer = crypto.scryptSync(password, salt, 64);
  return hashedPassword.toString('hex') + ':' + salt;
}

export function verifyPassword(storedPassword: string, suppliedPassword: string): boolean {
  const [hashedPassword, salt] = storedPassword.split(':');
  const hashedPasswordBuf: Buffer = Buffer.from(hashedPassword, 'hex');
  const suppliedPasswordBuf: Buffer = crypto.scryptSync(suppliedPassword, salt, 64);
  return crypto.timingSafeEqual(hashedPasswordBuf, suppliedPasswordBuf);
}