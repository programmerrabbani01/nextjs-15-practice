import Image from "next/image.js";
import React from "react";
import developer from "@/public/developer3.png";
import { getAllDevelopersData } from "@/actions/deVesAction.ts";
import DeleteButton from "./DeleteButton.tsx";

export default async function AllDevelopers() {
  // get all developers data

  const developers = await getAllDevelopersData();

  return (
    <>
      <div className="deVsItems grid grid-cols-[1fr_1fr_1fr] gap-5">
        {developers.map((deVs) => {
          return (
            <div
              key={String(deVs._id)}
              className="deVsItem flex flex-col items-center bg-white shadow-md rounded-lg py-2 relative"
            >
              <Image
                src={deVs?.photo?.url || developer}
                width={150}
                height={150}
                alt="developer"
                className="mb-2 w-[150px] h-[150px] object-cover rounded-full"
              />
              <h1 className="text-xl font-bold">{deVs?.name}</h1>
              <p className="text-sm text-gray-500 font-medium">
                {deVs?.location}
              </p>
              <div className="absolute top-1 right-2">
                <DeleteButton id={String(deVs._id)} />
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}
