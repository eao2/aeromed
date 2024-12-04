export async function POST(request) {
  const formData = await request.formData();
  const file = formData.get('file');

  if (!file) {
    return new Response("No file uploaded", { status: 400 });
  }

  return new Response("File uploaded successfully", { status: 200 });
}
