import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center p-6">
      <div className="max-w-md w-full p-8 rounded-lg border border-gray-300 shadow-lg shadow-gray-600">
        <h1 className="text-3xl font-bold mb-4 text-center">Welcome</h1>
        <p className="text-center mb-8">
          View your secure user profile information
        </p>
        <Link href="/profile" passHref>
          <button className="w-full group hover:cursor-pointer bg-white text-black font-semibold py-2 px-4 rounded-lg shadow shadow-gray-600 transition duration-300 ease-in-out transform hover:scale-105">
            Go to Profile
          </button>
        </Link>
      </div>
    </main>
  );
}
