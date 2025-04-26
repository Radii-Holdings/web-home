import fs from 'fs';
import path from 'path';

const filePath = path.resolve('./views.json');

export async function GET(req) {
  try {
    const url = new URL(req.url);
    const slug = url.searchParams.get('slug');

    if (!slug) {
      return new Response(JSON.stringify({ error: 'Slug is required' }), {
        status: 400,
      });
    }

    const data = JSON.parse(fs.readFileSync(filePath, 'utf-8'));
    const views = data[slug] || 0;

    return new Response(JSON.stringify({ views }), { status: 200 });
  } catch (error) {
    console.error('Error reading views file:', error);
    return new Response(JSON.stringify({ error: 'Internal Server Error' }), {
      status: 500,
    });
  }
}

export async function POST(req) {
  try {
    const { slug } = await req.json();

    if (!slug) {
      return new Response(JSON.stringify({ error: 'Slug is required' }), {
        status: 400,
      });
    }

    const data = JSON.parse(fs.readFileSync(filePath, 'utf-8'));
    data[slug] = (data[slug] || 0) + 1;

    fs.writeFileSync(filePath, JSON.stringify(data, null, 2));

    return new Response(JSON.stringify({ views: data[slug] }), { status: 200 });
  } catch (error) {
    console.error('Error updating views file:', error);
    return new Response(JSON.stringify({ error: 'Internal Server Error' }), {
      status: 500,
    });
  }
}