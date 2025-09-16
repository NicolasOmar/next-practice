import { UserEntity } from "@/types"
import db from "./db"

export const createUser = async (email: string, password: string) => {
  const result = await db.prepare(`INSERT INTO users (email, password) VALUES (?, ?)`).run(email, password)
  return { id: result.lastInsertRowid, email }
}

export const getUserByEmail = async (email: string) => {
  const user = await db.prepare<string, UserEntity>(`SELECT * FROM users WHERE email = ?`).get(email)
  return user ?? null
}