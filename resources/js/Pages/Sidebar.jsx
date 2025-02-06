import React from "react";
import { RiCloseLargeFill } from "react-icons/ri";

export default function Sidebar({ sidebar, handleSidebar }) {
  return (
    <aside className={`block md:hidden backdrop-blur-md bg-white/70 duration-700  ease-in-out fixed inset-y-0 ${sidebar ? 'right-0' : '-right-1/2'} w-1/2 z-[200]`}>
        <span className="rounded-lg absolute top-0 left-0 p-1 m-2 cursor-pointer hover:bg-white active:bg-red-600" onClick={handleSidebar}>
          <RiCloseLargeFill className="text-2xl" />
          </span>
        <h2 className="p-3 text-center font-semibold text-xl">Menu</h2>
        <nav className="flex flex-col gap-3">
            <a className="p-2 px-5 hover:bg-white active:bg-white" href="#home">Home</a> 
            <a className="p-2 px-5 hover:bg-white active:bg-white" href="#about">About Me</a> 
            <a className="p-2 px-5 hover:bg-white active:bg-white" href="#skill">Skill</a> 
            <a className="p-2 px-5 hover:bg-white active:bg-white" href="#experience">Experience</a> 
            <a className="p-2 px-5 hover:bg-white active:bg-white" href="#portofolio">Portofolio</a> 
            <a className="p-2 px-5 hover:bg-white active:bg-white" href="#review">Reviews & Comments</a>
        </nav>
    </aside>
  );
}