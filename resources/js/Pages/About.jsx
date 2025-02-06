import React from "react";

export default function About({}) {
  return (
    <div id="about" className="p-3 pt-10 h-[90vh] bg-sky-900 flex flex-col justify-center">
        <div className="p-3 grid grid-cols-1 md:grid-cols-2 justify-center gap-14">
            <img src="/img/profile.png" alt="Foto Profil" className="bg-slate-700 rounded-2xl justify-self-end hidden md:block" />
            <div className="flex flex-col w-full md:w-3/4">
                <h2 className="mb-5 text-xl md:text-2xl font-semibold text-white"><span className="border-b-4 border-b-orange-500">About</span> Me</h2>
                <p className="text-white text-justify text-xl">
                  My name is <span className="text-yellow-300">Wisnu Aji Pamungkas</span>, I'm undergraduate student Information System in <span className="text-sky-400 font-semibold">Universitas Bina Sarana Informatika</span>. I interested to Computer field, both hardware or software. I have some experience in Technician to repairing hardware issue in Computer or Laptop. Now, I want to develop my skill in software field spesificly in building Website. I have several experience in Frontend Web Developer, Backend, and Fullstack.
                </p>
            </div>
        </div>
    </div>
  );
}