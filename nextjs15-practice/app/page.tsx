import Link from "next/link.js";

export default function Home() {
  return (
    <>
      <div className="text-center mt-40">
        <h1 className="text-4xl font-bold mb-2">Welcome To Home Page</h1>
        <Link
          href="/developers"
          className="bg-blue-400 text-white px-4 py-2 rounded-lg font-bold text-md"
        >
          Go To Developers Page
        </Link>
      </div>
    </>
  );
}
