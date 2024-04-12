import { routes } from "@/utils/routes";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col gap-4 items-center justify-center">
      <h1>Landing Page</h1>
      <Link href={routes.login} className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded">Login</Link>
    </main>
  );
}

