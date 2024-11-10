import axios from "axios";

interface CloudUploadParams {
  file: File; // `file` should be of type `File` (usually from an input element)
  preset: string; // `preset` should be a `string`
  cloudName: string; // `cloudName` should be a `string`
}

export const cloudUpload = async ({
  file,
  preset,
  cloudName,
}: CloudUploadParams) => {
  const form_data = new FormData();
  form_data.append("file", file);
  form_data.append("upload_preset", preset);
  const res = await axios.post(
    `https://api.cloudinary.com/v1_1/${cloudName}/image/upload`,
    form_data
  );
  return res.data;
};
