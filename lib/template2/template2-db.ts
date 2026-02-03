import Database from "better-sqlite3";
import path from "path";
import fs from "fs";

// Database path
const dbDir = path.join(process.cwd(), "data", "template2");
const dbPath = path.join(dbDir, "template2.sqlite");

// Ensure data directory exists
if (!fs.existsSync(dbDir)) {
  fs.mkdirSync(dbDir, { recursive: true });
}

// Initialize database
const db = new Database(dbPath);

// Create table if not exists
db.exec(`
  CREATE TABLE IF NOT EXISTS rsvp (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    nama TEXT NOT NULL,
    kehadiran TEXT NOT NULL CHECK (kehadiran IN ('hadir', 'tidak_hadir', 'ragu')),
    ucapan TEXT NOT NULL,
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP
  )
`);

export interface RSVPEntry {
  id: number;
  nama: string;
  kehadiran: "hadir" | "tidak_hadir" | "ragu";
  ucapan: string;
  created_at: string;
}

export function getAllRSVP(page: number = 1, limit: number = 10): { data: RSVPEntry[]; total: number } {
  const offset = (page - 1) * limit;

  const countStmt = db.prepare("SELECT COUNT(*) as count FROM rsvp");
  const totalResult = countStmt.get() as { count: number };
  const total = totalResult.count;

  const stmt = db.prepare(`
    SELECT id, nama, kehadiran, ucapan, created_at 
    FROM rsvp 
    ORDER BY created_at DESC 
    LIMIT ? OFFSET ?
  `);

  const data = stmt.all(limit, offset) as RSVPEntry[];

  return { data, total };
}

export function createRSVP(
  nama: string,
  kehadiran: "hadir" | "tidak_hadir" | "ragu",
  ucapan: string
): RSVPEntry {
  const stmt = db.prepare(`
    INSERT INTO rsvp (nama, kehadiran, ucapan) 
    VALUES (?, ?, ?)
  `);

  const result = stmt.run(nama, kehadiran, ucapan);

  const getStmt = db.prepare("SELECT * FROM rsvp WHERE id = ?");
  const entry = getStmt.get(result.lastInsertRowid) as RSVPEntry;

  return entry;
}
