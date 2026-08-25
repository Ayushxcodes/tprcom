import fs from 'fs/promises';
import path from 'path';
import { initialSiteContent, SiteContent } from '@/data/initialContent';

const CONTENT_FILE_PATH = path.join(process.cwd(), 'src', 'data', 'content.json');

export async function getContent(): Promise<SiteContent> {
  try {
    const data = await fs.readFile(CONTENT_FILE_PATH, 'utf-8');
    const parsed = JSON.parse(data);
    // Deep merge with initialSiteContent to ensure any missing fields/keys get fallback values
    return {
      ...initialSiteContent,
      ...parsed,
      hero: { ...initialSiteContent.hero, ...parsed.hero },
      philosophy: { ...initialSiteContent.philosophy, ...parsed.philosophy },
      approach: { ...initialSiteContent.approach, ...parsed.approach },
      services: { ...initialSiteContent.services, ...parsed.services },
      work: { ...initialSiteContent.work, ...parsed.work },
      sectors: { ...initialSiteContent.sectors, ...parsed.sectors },
      leadership: { ...initialSiteContent.leadership, ...parsed.leadership },
      clientLogos: { ...initialSiteContent.clientLogos, ...parsed.clientLogos },
      contact: { ...initialSiteContent.contact, ...parsed.contact },
      footer: { ...initialSiteContent.footer, ...parsed.footer },
    };
  } catch {
    // If file doesn't exist or is invalid JSON, return initial default content
    return initialSiteContent;
  }
}

export async function saveContent(newContent: SiteContent): Promise<boolean> {
  try {
    const dirPath = path.dirname(CONTENT_FILE_PATH);
    await fs.mkdir(dirPath, { recursive: true });
    await fs.writeFile(CONTENT_FILE_PATH, JSON.stringify(newContent, null, 2), 'utf-8');
    return true;
  } catch (error) {
    console.error('Failed to save content.json:', error);
    return false;
  }
}

export async function resetContentToDefault(): Promise<SiteContent> {
  try {
    await saveContent(initialSiteContent);
    return initialSiteContent;
  } catch (error) {
    console.error('Failed to reset content.json:', error);
    return initialSiteContent;
  }
}
