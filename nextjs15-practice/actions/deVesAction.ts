"use server";
import { cloudUpload } from "@/utils/cloudUpload.ts";

export const createDevelopersData = async (formData: FormData) => {
  //  get form data

  const name = formData.get("name");
  const email = formData.get("email");
  const cellNumber = formData.get("cellNumber");
  const location = formData.get("location");

  // Upload the photo to Cloudinary
  const fileData = await cloudUpload({
    file: formData.get("photo") as File,
    preset: "mernStack-2",
    cloudName: "dairwhedy",
  });
  // console.log(formData.get("photo"));
};
