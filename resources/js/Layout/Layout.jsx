import { Link } from "@inertiajs/react";
import React, { useState } from "react";
import { VscListSelection } from "react-icons/vsc";
import Sidebar from "../Pages/Sidebar";
import Footer from "../Pages/Footer";

export default function Layout({ children }) {
  const [sidebar, setSideBar] = useState(false);

  const handleSidebar = () => {
    sidebar ? setSideBar(false) : setSideBar(true);
  }

  return (
    <>
      <header className="p-2 px-5 w-full sm:px-4 md:px-6 lg:px-10 sticky top-0 z-40 bg-gradient-to-r from-sky-400 to-indigo-600">
        <div className="flex flex-row justify-between">
          <h1 className="pt-1 text-white text-2xl font-semibold"><span className="text-yellow-300">P</span>ortofolio</h1>
          <nav className="text-white hidden md:flex flex-row gap-3">
            <a className="p-1 bg-transparent hover:bg-white/[0.2] rounded-md" href="#home">Home</a>
            <a className="p-1 bg-transparent hover:bg-white/[0.2] rounded-md" href="#about">About</a>
            <a className="p-1 bg-transparent hover:bg-white/[0.2] rounded-md" href="#skill">Skill</a>
            <a className="p-1 bg-transparent hover:bg-white/[0.2] rounded-md" href="#experience">Experience</a>
            <a className="p-1 bg-transparent hover:bg-white/[0.2] rounded-md" href="#portofolio">Portofolio</a>
            <a className="p-1 bg-transparent hover:bg-white/[0.2] rounded-md" href="#review">Reviews & Comments</a>
          </nav>
          <span className="p-2 md:hidden bg-transparent hover:bg-white/[0.2]" onClick={handleSidebar}>
            <VscListSelection className="text-white text-xl" />
          </span>
        </div>
      </header>
      <main>
        {children}
      </main>
      <Sidebar sidebar={sidebar} handleSidebar={handleSidebar} />
      <Footer />
    </>
  );
}