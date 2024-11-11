"use server";
import { cloudUpload } from "@/utils/cloudUpload.ts";
import DeVs from "@/models/Developers.ts";
import { mongoDBConnection } from "@/config/mongoDBConnect.ts";
import { revalidatePath } from "next/cache";

// create a new developer
export const createDevelopersData = async (formData: FormData) => {
  await mongoDBConnection();

  //  get form data

  const name = formData.get("name");
  const email = formData.get("email");
  const cell = formData.get("cell");
  const location = formData.get("location");

  // Upload the photo to Cloudinary
  const fileData = await cloudUpload({
    file: formData.get("photo") as File,
    preset: "mernStack-2",
    cloudName: "dairwhedy",
  });
  // console.log(formData.get("photo"));

  await DeVs.create({
    name,
    email,
    cell,
    location,
    photo: {
      url: fileData.secure_url,
      public_id: fileData.public_id,
    },
  });

  revalidatePath("/developers");
};

// get all developers
export const getAllDevelopersData = async () => {
  await mongoDBConnection();

  // get all developers

  const developers = await DeVs.find({ trash: false }).sort({ createdAt: -1 });

  // return all developers

  return developers;
};

// delete a developer

export const deleteADeveloperData = async (id) => {
  await mongoDBConnection();

  // Delete the developer
  const deleteDeveloper = await DeVs.findByIdAndDelete(id);

  // Revalidate the path to refresh data on the client side
  revalidatePath("/developers");

  // Return a plain object if needed, or simply return a success status
  if (deleteDeveloper) {
    return {
      success: true,
      id: deleteDeveloper._id.toString(), // Convert `_id` to string
    };
  }

  return { success: false };
};
