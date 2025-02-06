import React from "react";
import { FaLinkedin, FaGithub, FaInstagram, FaWhatsapp } from "react-icons/fa";

export default function Socmed({}) {
  return (
    <div id="contact" className="p-3 md:p-8 md:py-5 flex flex-col justify-center align-center gap-3 w-full bg-orange-50 shadow-lg">
      <h2 className="text-center text-2xl font-semibold text-indigo-500 hidden md:inline"><span className="border-b-4 border-b-orange-300">Let's Connect</span> With <span className="text-indigo-400">Me</span></h2>
      <div className="flex flex-row flex-wrap justify-center gap-10">
        <a href="https://wa.me/+6285889634432" target="blank" className="text-4xl md:text-5xl text-slate-600 hover:text-indigo-500"><FaWhatsapp /> </a>
        <a href="https://www.linkedin.com/in/wisnuajipamungkas" target="blank" className="text-4xl md:text-5xl text-slate-600 hover:text-indigo-500"><FaLinkedin /> </a>
        <a href="https://www.github.com/wisnuajipamungkas354" target="blank" className="text-4xl md:text-5xl text-slate-600 hover:text-indigo-500"><FaGithub /> </a>
        <a href="https://www.instagram.com/wisnuajipamungkas_" target="blank" className="text-4xl md:text-5xl text-slate-600 hover:text-indigo-600"><FaInstagram /> </a>
      </div>
    </div>
  );
}