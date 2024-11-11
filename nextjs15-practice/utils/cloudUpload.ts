import axios from "axios";

interface CloudUploadParams {
  file: File; // For single file uploads (e.g., developer photo)
  files?: File[]; // For multiple files, e.g., product photos
  preset: string;
  cloudName: string;
  folder: string; // Dynamic folder based on entity type
}

export const cloudUpload = async ({
  file,
  files,
  preset,
  cloudName,
  folder,
}: CloudUploadParams) => {
  // const form_data = new FormData();
  // form_data.append("file", file);
  // form_data.append("upload_preset", preset);
  // const res = await axios.post(
  //   `https://api.cloudinary.com/v1_1/${cloudName}/image/upload`,
  //   form_data
  // );
  // return res.data;

  const uploads = (files || [file]).map(async (file) => {
    const formData = new FormData();
    formData.append("file", file);
    formData.append("upload_preset", preset);
    formData.append("folder", folder); // Specify folder

    const res = await axios.post(
      `https://api.cloudinary.com/v1_1/${cloudName}/image/upload`,
      formData
    );
    return res.data; // Returns secure_url and public_id
  });

  return Promise.all(uploads); // For multiple or single files
};
