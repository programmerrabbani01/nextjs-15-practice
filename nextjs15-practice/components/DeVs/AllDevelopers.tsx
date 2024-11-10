import Image from "next/image.js";
import React from "react";
import developer from "@/public/developer3.png";

export default function AllDevelopers() {
  return (
    <>
      <div className="deVsItems grid grid-cols-[1fr_1fr_1fr] gap-5">
        <div className="deVsItem flex flex-col items-center bg-white shadow-md rounded-lg py-2">
          <Image
            src={developer}
            alt="developer"
            className="mb-2 w-[150px] h-[150px] object-cover rounded-full"
          />
          <h1 className="text-xl font-bold">Rabbani</h1>
          <p className="text-sm text-gray-500 font-medium">Programmer</p>
        </div>
      </div>
    </>
  );
}
