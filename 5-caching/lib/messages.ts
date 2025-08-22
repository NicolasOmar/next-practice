import Database from 'better-sqlite3';
import { cache } from 'react';

const db = new Database('messages.db');

function initDb(): void {
  db.exec(`
    CREATE TABLE IF NOT EXISTS messages (
      id INTEGER PRIMARY KEY, 
      text TEXT
    )`);
}

initDb();

export function addMessage(message: string): void {
  db.prepare('INSERT INTO messages (text) VALUES (?)').run(message);
}

export interface Message {
  id: number;
  text: string;
}

// For non fetch API calls, such as sql queries, the [cache] function
// helps to cache its data in case is called more than once in the same render cycle
export const getMessages = cache(
  function getMessages(): Message[] {
    console.log('Fetching messages from db');
    return db.prepare('SELECT * FROM messages').all() as Message[];
  }
)
