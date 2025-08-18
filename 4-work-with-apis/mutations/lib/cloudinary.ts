import { v2 as cloudinary, UploadApiResponse } from 'cloudinary';

// This is an implementation of cloudinary, service you will need to create
// an account to use
// Type for the image argument (File or Blob)
export type UploadableImage = Blob | File;

if (!process.env.CLOUDINARY_CLOUD_NAME) {
  throw new Error('CLOUDINARY_CLOUD_NAME is not set');
}
if (!process.env.CLOUDINARY_API_KEY) {
  throw new Error('CLOUDINARY_API_KEY is not set');
}
if (!process.env.CLOUDINARY_API_SECRET) {
  throw new Error('CLOUDINARY_API_SECRET is not set');
}

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME!,
  api_key: process.env.CLOUDINARY_API_KEY!,
  api_secret: process.env.CLOUDINARY_API_SECRET!,
});

export async function uploadImage(image: UploadableImage): Promise<string> {
  const imageData = await image.arrayBuffer();
  const mime = image.type;
  const encoding = 'base64';
  const base64Data = Buffer.from(imageData).toString('base64');
  const fileUri = `data:${mime};${encoding},${base64Data}`;
  const result: UploadApiResponse = await cloudinary.uploader.upload(fileUri, {
    folder: 'nextjs-course-mutations',
  });
  return result.secure_url;
}
