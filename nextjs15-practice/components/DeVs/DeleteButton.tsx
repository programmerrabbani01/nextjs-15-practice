"use client";

import { deleteADeveloperData } from "@/actions/deVesAction.ts";
import React from "react";

interface DeleteButtonProps {
  id: string | number;
}

export default function DeleteButton({ id }: DeleteButtonProps) {
  return (
    <button
      onClick={() => deleteADeveloperData(id)}
      className="bg-blue-300 rounded-full w-7 h-7 flex justify-center items-center text-sm text-white font-bold hover:bg-blue-500 transition-all duration-300"
    >
      X
    </button>
  );
}
