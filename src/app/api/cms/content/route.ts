import { NextResponse } from 'next/server';
import { getDbContent, saveDbContent, resetDbContent } from '@/lib/db';

export async function GET() {
  try {
    const content = await getDbContent();
    return NextResponse.json({ success: true, content });
  } catch (error) {
    console.error('API GET CMS content error:', error);
    return NextResponse.json({ success: false, error: 'Failed to fetch content' }, { status: 500 });
  }
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    if (!body || !body.content) {
      return NextResponse.json({ success: false, error: 'Invalid content payload' }, { status: 400 });
    }

    const saved = await saveDbContent(body.content);
    if (saved) {
      return NextResponse.json({ success: true, content: body.content });
    } else {
      return NextResponse.json({ success: false, error: 'Failed to write content to database' }, { status: 500 });
    }
  } catch (error) {
    console.error('API POST CMS content error:', error);
    return NextResponse.json({ success: false, error: 'Failed to save content' }, { status: 500 });
  }
}

export async function DELETE() {
  try {
    const reset = await resetDbContent();
    if (reset) {
      return NextResponse.json({ success: true });
    } else {
      return NextResponse.json({ success: false, error: 'Failed to reset database content' }, { status: 500 });
    }
  } catch (error) {
    console.error('API DELETE CMS content error:', error);
    return NextResponse.json({ success: false, error: 'Failed to reset content' }, { status: 500 });
  }
}
