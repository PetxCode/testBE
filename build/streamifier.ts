import streamifier from "streamifier";
import cloudinary from "./cloudinary";

export const streamUpload = async (req: any) => {
  return new Promise(async (resolve, reject) => {
    let stream = await cloudinary.uploader.upload_stream(
      (error: Error, result: any) => {
        if (result) {
          return resolve(result);
        } else {
          return reject(error);
        }
      }
    );

    console.log(req.file.buffer);
    await streamifier.createReadStream(req?.file?.buffer).pipe(stream);
  });
};
