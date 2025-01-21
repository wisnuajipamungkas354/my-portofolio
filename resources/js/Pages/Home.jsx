import React from "react";
import Button from "../Components/Button";

export default function Home({image}) {
  return (
    <div className="p-3 h-screen bg-black flex flex-row justify-center items-center">
      <div className="flex flex-row flex-wrap justify-center items-center gap-x-12 gap-y-5">
        <img src="/img/profile.png" className="rounded-full w-40 md:w-60 lg:w-80" alt="Gambar Profil"/>
        <div className="flex flex-col justify-center items-center">
          <h3 className="text-white text-center text-lg md:text-xl">Halo, Saya Wisnu Aji Pamungkas!</h3>
          <h1 className="text-white text-center text-xl md:text-3xl font-semibold">Saya adalah Seorang <span className="font-bold">Web Developer</span></h1>
          <span>
            <Button type="button" color="primary" text="Hubungi Saya" />
            <Button type="button" color="danger" text="Beri Ulasan" />
          </span>
        </div>
      </div>
    </div>
  );
}