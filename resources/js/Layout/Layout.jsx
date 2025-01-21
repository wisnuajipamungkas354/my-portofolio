import { Link } from "@inertiajs/react";
import React from "react";

export default function Layout({ children }) {
  return (
    <>
      <header className="p-2 bg-black w-full hidden lg:flex flex-row justify-between fixed top-0 bg-gradient-to-r from-indigo-700 via-purple-700 to-pink-700">
          <h1 className="text-white p-2 font-bold">Wisnu Aji Pamungkas</h1>
          <nav className="text-white flex flex-row gap-3">
            <Link className="p-2 bg-transparent hover:bg-white/[0.2] rounded-md" href="/">Home</Link>
            <Link className="p-2 bg-transparent hover:bg-white/[0.2] rounded-md" href="/about">About Me</Link>
            <Link className="p-2 bg-transparent hover:bg-white/[0.2] rounded-md" href="/portofolio">Portofolio</Link>
          </nav>
      </header>
      <main>
        {children}
      </main>
    </>
  );
}