import { writeFile } from 'fs/promises';
import path from 'path';
import { mkdir } from 'fs/promises';

export async function POST(request) {
  const formData = await request.formData();
  const file = formData.get('fileToUpload');

  if (!file) {
    return new Response("No file uploaded", { status: 400 });
  }

  // const uploadDir = path.join(process.cwd(), 'uploads');

  try {
    // await mkdir(uploadDir, { recursive: true });

    // const filePath = path.join(uploadDir, file.name);

    // const buffer = Buffer.from(await file.arrayBuffer());

    // await writeFile(filePath, buffer);

    // return new Response(`File uploaded successfully: ${filePath}`, { status: 200 });
    // return new Response('[0.99369967 0.24630028]');
    return new Response(`[0.99369967 ${Math.random()}]`);
    // return new Response(`[0.99369967, 0.14159e-2]`);
  } catch (error) {
    console.error('Error saving file:', error);
    return new Response("Error saving file", { status: 500 });
  }
}
