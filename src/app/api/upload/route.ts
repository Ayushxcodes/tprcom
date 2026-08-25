import { NextResponse } from 'next/server';
import { getSupabase } from '@/lib/supabase';
import { promises as fs } from 'fs';
import path from 'path';

export async function POST(request: Request) {
  try {
    const formData = await request.formData();
    const file = formData.get('file') as File | null;

    if (!file) {
      return NextResponse.json({ success: false, error: 'No file provided' }, { status: 400 });
    }

    const bytes = await file.arrayBuffer();
    const buffer = Buffer.from(bytes);

    // Clean filename
    const timestamp = Date.now();
    const safeName = file.name.replace(/[^a-zA-Z0-9.-]/g, '_');
    const fileName = `${timestamp}-${safeName}`;

    // 1. Try Supabase Storage
    const supabase = getSupabase();
    if (supabase) {
      try {
        const bucketName = 'cms-images';

        const { data, error } = await supabase.storage
          .from(bucketName)
          .upload(fileName, buffer, {
            contentType: file.type,
            upsert: true,
          });

        if (!error && data) {
          const { data: publicUrlData } = supabase.storage.from(bucketName).getPublicUrl(fileName);
          if (publicUrlData?.publicUrl) {
            return NextResponse.json({ success: true, url: publicUrlData.publicUrl, storage: 'supabase' });
          }
        } else {
          console.warn('Supabase storage upload error/warning:', error?.message);
        }
      } catch (sbErr) {
        console.error('Supabase storage exception:', sbErr);
      }
    }

    // 2. Fallback to local public/uploads directory
    const uploadsDir = path.join(process.cwd(), 'public', 'uploads');
    await fs.mkdir(uploadsDir, { recursive: true });
    const localFilePath = path.join(uploadsDir, fileName);
    await fs.writeFile(localFilePath, buffer);

    const localUrl = `/uploads/${fileName}`;
    return NextResponse.json({ success: true, url: localUrl, storage: 'local' });
  } catch (error) {
    console.error('Upload API error:', error);
    return NextResponse.json({ success: false, error: 'File upload failed' }, { status: 500 });
  }
}
