import React from "react";
import Form from "next/form";
import { createDevelopersData } from "@/actions/deVesAction.ts";

export default function DevelopersForm() {
  return (
    <>
      <Form
        action={createDevelopersData}
        className="bg-white p-7 rounded-lg shadow-md"
      >
        <div className="my-2 flex flex-col gap-1">
          <label>Name</label>
          <input
            type="text"
            placeholder="Type Your Name"
            className="border border-blue-100 outline-none px-4 py-2 rounded-lg"
            name="name"
          />
        </div>

        <div className="my-2 flex flex-col gap-1">
          <label>Email Address</label>
          <input
            type="email"
            placeholder="Type Your Email"
            className="border border-blue-100 outline-none px-4 py-2 rounded-lg"
            name="email"
          />
        </div>

        <div className="my-2 flex flex-col gap-1">
          <label>Cell Number</label>
          <input
            type="text"
            placeholder="Type Your Cell Number"
            className="border border-blue-100 outline-none px-4 py-2 rounded-lg"
            name="cell"
          />
        </div>

        <div className="my-2 flex flex-col gap-1">
          <label>Location</label>
          <input
            type="text"
            placeholder="Type Your Location"
            className="border border-blue-100 outline-none px-4 py-2 rounded-lg"
            name="location"
          />
        </div>

        <div className="my-2 flex flex-col gap-1">
          <label>Photo</label>
          <input
            type="file"
            className="border border-blue-100 outline-none px-4 py-2 rounded-lg"
            name="photo"
          />
        </div>

        <div className="my-2 flex flex-col gap-1">
          <button
            type="submit"
            className="bg-blue-400 text-white hover:bg-blue-500 transition-all duration-300 px-4 py-2 rounded-lg"
          >
            Create
          </button>
        </div>
      </Form>
    </>
  );
}
