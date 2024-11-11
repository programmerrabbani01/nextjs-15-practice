"use server";
import { cloudUpload } from "@/utils/cloudUpload.ts";
import DeVs from "@/models/Developers.ts";
import { mongoDBConnection } from "@/config/mongoDBConnect.ts";
import { revalidatePath } from "next/cache";
import cloudinary from "cloudinary";

// Configure Cloudinary
cloudinary.v2.config({
  cloud_name: "dairwhedy",
  api_key: "133861414556387",
  api_secret: "VXfHSyH06s7z1XjH7dBxhMEid2Q",
});

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
    folder: "developers", // Developer-specific folder
  });
  // console.log(formData.get("photo"));

  await DeVs.create({
    name,
    email,
    cell,
    location,
    photo: {
      url: fileData[0].secure_url, // Retrieve from array of uploads
      public_id: fileData[0].public_id,
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

export const deleteADeveloperData = async (id: string) => {
  await mongoDBConnection();

  const developer = await DeVs.findById(id);
  if (!developer) return { success: false };

  // Delete the photo from Cloudinary
  if (developer?.photo?.public_id) {
    await cloudinary.v2.uploader.destroy(developer.photo.public_id);
  }

  // Remove the developer from the database
  await DeVs.findByIdAndDelete(id);
  revalidatePath("/developers");

  return { success: true };
};

// create a product

// export const createProductData = async (formData: FormData) => {
//   await mongoDBConnection();

//   const name = formData.get("name");
//   const price = formData.get("price");

//   const productId = new ObjectId();
//   // Generate unique ID for folder structure
//   const folder = `products/${productId}`; // Unique folder for each product

//   const files = formData.getAll("photos") as File[];
//   const fileData = await cloudUpload({
//     files,
//     preset: "mernStack-2",
//     cloudName: "dairwhedy",
//     folder,
//   });

//   const photos = fileData.map((file) => ({
//     url: file.secure_url,
//     public_id: file.public_id,
//   }));

//   await Products.create({ name, price, photos });

//   revalidatePath("/products");
// };

// update a product
// export const updateProductData = async (id, formData: FormData) => {
//   await mongoDBConnection();

//   const product = await Products.findById(id);
//   if (!product) return { success: false };

//   const files = formData.getAll("photos") as File[];
//   const newPhotos: any[] = [];
//   const folder = `products/${id}`;

//   if (files.length) {
//     // Delete old photos from Cloudinary
//     for (const photo of product.photos) {
//       await cloudinary.v2.uploader.destroy(photo.public_id);
//     }

//     // Upload new photos
//     const fileData = await cloudUpload({
//       files,
//       preset: "mernStack-2",
//       cloudName: "dairwhedy",
//       folder,
//     });

//     newPhotos.push(
//       ...fileData.map((file) => ({
//         url: file.secure_url,
//         public_id: file.public_id,
//       }))
//     );
//   }

//   await Products.findByIdAndUpdate(id, {
//     photos: files.length ? newPhotos : product.photos,
//   });

//   revalidatePath(`/products/${id}`);

//   return { success: true };
// };
