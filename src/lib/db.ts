import { promises as fs } from 'fs';
import path from 'path';
import { createClient, SupabaseClient } from '@supabase/supabase-js';
import { initialSiteContent, SiteContent } from '@/data/initialContent';

const DB_FILE_PATH = path.join(process.cwd(), 'src', 'data', 'db_content.json');

// Supabase Environment Variables
const SUPABASE_URL = process.env.NEXT_PUBLIC_SUPABASE_URL || process.env.SUPABASE_URL || '';
const SUPABASE_KEY =
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY ||
  process.env.SUPABASE_ANON_KEY ||
  process.env.SUPABASE_KEY ||
  process.env.SUPABASE_SERVICE_ROLE_KEY ||
  '';

let supabase: SupabaseClient | null = null;

function getSupabase(): SupabaseClient | null {
  if (!SUPABASE_URL || !SUPABASE_KEY) {
    return null;
  }

  if (!supabase) {
    try {
      supabase = createClient(SUPABASE_URL, SUPABASE_KEY);
    } catch (err) {
      console.error('Error initializing Supabase client:', err);
      return null;
    }
  }

  return supabase;
}

/**
 * Fetch CMS Content from Supabase Database (with local file fallback)
 */
export async function getDbContent(): Promise<SiteContent> {
  const client = getSupabase();

  if (client) {
    try {
      const { data, error } = await client.from('site_content').select('content').eq('id', 1).single();

      if (data && data.content) {
        const parsed = typeof data.content === 'string' ? JSON.parse(data.content) : data.content;
        return { ...initialSiteContent, ...parsed };
      }

      if (error && error.code !== 'PGRST116') {
        console.warn('Supabase fetch query warning:', error.message);
      }
    } catch (err) {
      console.error('Supabase fetch error, falling back to local file storage:', err);
    }
  }

  // Fallback to local JSON storage
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
 * Save CMS Content to Supabase Database (with local file fallback)
 */
export async function saveDbContent(newContent: SiteContent): Promise<boolean> {
  const client = getSupabase();

  if (client) {
    try {
      const { error } = await client
        .from('site_content')
        .upsert({ id: 1, content: newContent, updated_at: new Date().toISOString() }, { onConflict: 'id' });

      if (!error) {
        await saveToFile(JSON.stringify(newContent, null, 2));
        return true;
      } else {
        console.error('Supabase save error:', error.message);
      }
    } catch (err) {
      console.error('Supabase upsert exception, falling back to file write:', err);
    }
  }

  return await saveToFile(JSON.stringify(newContent, null, 2));
}

/**
 * Reset CMS Content
 */
export async function resetDbContent(): Promise<boolean> {
  const client = getSupabase();

  if (client) {
    try {
      await client.from('site_content').delete().eq('id', 1);
    } catch (err) {
      console.error('Supabase reset error:', err);
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
