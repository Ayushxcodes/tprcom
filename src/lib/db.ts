import { promises as fs } from 'fs';
import path from 'path';
import mysql from 'mysql2/promise';
import { initialSiteContent, SiteContent } from '@/data/initialContent';

const DB_FILE_PATH = path.join(process.cwd(), 'src', 'data', 'db_content.json');

// Hostinger MySQL Connection Config
const DB_HOST = process.env.DB_HOST || '127.0.0.1';
const DB_PORT = Number(process.env.DB_PORT || 3306);
const DB_USER = process.env.DB_USER || '';
const DB_PASSWORD = process.env.DB_PASSWORD || '';
const DB_NAME = process.env.DB_NAME || 'u661072455_trp_database';

let pool: mysql.Pool | null = null;

function getPool(): mysql.Pool | null {
  if (!DB_USER && !process.env.DB_HOST) {
    // MySQL not configured, fallback to file DB
    return null;
  }

  if (!pool) {
    try {
      pool = mysql.createPool({
        host: DB_HOST,
        port: DB_PORT,
        user: DB_USER,
        password: DB_PASSWORD,
        database: DB_NAME,
        waitForConnections: true,
        connectionLimit: 10,
        queueLimit: 0,
      });
    } catch (err) {
      console.error('MySQL Connection Error:', err);
      return null;
    }
  }

  return pool;
}

// Auto-initialize MySQL Table if missing
async function ensureMySQLTable(db: mysql.Pool): Promise<boolean> {
  try {
    await db.query(`
      CREATE TABLE IF NOT EXISTS site_content (
        id INT PRIMARY KEY,
        content LONGTEXT NOT NULL,
        updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
      ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
    `);
    return true;
  } catch (err) {
    console.error('Error creating MySQL table:', err);
    return false;
  }
}

/**
 * Fetch CMS Content (Hostinger MySQL DB with File Fallback)
 */
export async function getDbContent(): Promise<SiteContent> {
  const db = getPool();

  if (db) {
    try {
      const tableReady = await ensureMySQLTable(db);
      if (tableReady) {
        const [rows] = await db.query<mysql.RowDataPacket[]>('SELECT content FROM site_content WHERE id = 1 LIMIT 1');
        if (rows && rows.length > 0 && rows[0].content) {
          const parsed = typeof rows[0].content === 'string' ? JSON.parse(rows[0].content) : rows[0].content;
          return { ...initialSiteContent, ...parsed };
        }
      }
    } catch (err) {
      console.error('MySQL fetch error, falling back to local file storage:', err);
    }
  }

  // Fallback to local persistent JSON file
  try {
    const fileExists = await fs.stat(DB_FILE_PATH).then(() => true).catch(() => false);
    if (fileExists) {
      const data = await fs.readFile(DB_FILE_PATH, 'utf-8');
      const parsed = JSON.parse(data);
      return { ...initialSiteContent, ...parsed };
    }
  } catch (err) {
    console.error('Error reading CMS content from file:', err);
  }

  return initialSiteContent;
}

/**
 * Save CMS Content (Hostinger MySQL DB with File Fallback)
 */
export async function saveDbContent(newContent: SiteContent): Promise<boolean> {
  const db = getPool();
  const jsonString = JSON.stringify(newContent);

  if (db) {
    try {
      const tableReady = await ensureMySQLTable(db);
      if (tableReady) {
        await db.query(
          `INSERT INTO site_content (id, content) VALUES (1, ?)
           ON DUPLICATE KEY UPDATE content = VALUES(content);`,
          [jsonString]
        );
        // Also sync local file
        await saveToFile(jsonString);
        return true;
      }
    } catch (err) {
      console.error('MySQL save error, falling back to file write:', err);
    }
  }

  return await saveToFile(jsonString);
}

/**
 * Reset CMS Content
 */
export async function resetDbContent(): Promise<boolean> {
  const db = getPool();

  if (db) {
    try {
      await db.query('DELETE FROM site_content WHERE id = 1');
    } catch (err) {
      console.error('MySQL reset error:', err);
    }
  }

  try {
    const fileExists = await fs.stat(DB_FILE_PATH).then(() => true).catch(() => false);
    if (fileExists) {
      await fs.unlink(DB_FILE_PATH);
    }
    return true;
  } catch (err) {
    console.error('Error deleting local file:', err);
    return false;
  }
}

async function saveToFile(jsonString: string): Promise<boolean> {
  try {
    const dirPath = path.dirname(DB_FILE_PATH);
    await fs.mkdir(dirPath, { recursive: true });
    await fs.writeFile(DB_FILE_PATH, jsonString, 'utf-8');
    return true;
  } catch (err) {
    console.error('Error saving to file storage:', err);
    return false;
  }
}
