import Database from 'better-sqlite3';

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

export function getMessages(): Message[] {
  console.log('Fetching messages from db');
  return db.prepare('SELECT * FROM messages').all() as Message[];
}
