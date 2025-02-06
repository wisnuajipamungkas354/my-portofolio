import React from "react";
import { BiLogoGmail } from "react-icons/bi";
import { FaGithub, FaInstagram, FaLinkedin, FaMailBulk, FaMailchimp, FaWhatsapp } from "react-icons/fa";
import { FaLocationDot, FaLocationPin, FaLocationPinLock } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";

export default function Footer({}) {
  return (
    <footer className="bg-gray-800 text-white p-3 flex flex-col justify-end">
      <h2 className="text-center font-semibold text-xl my-3"><span className="text-yellow-300">Additional</span> Information</h2>
        <div className="mb-3 flex flex-row flex-wrap gap-1 md:gap-5">
        <ul className="w-full md:w-3/5">
          <li><FaLocationDot className="inline text-xl" /> Dusun Cirejag 1 RT/RW 002/003 Kel. Cibalongsari Kec. Klari Kab. Karawang Jawa Barat - 41371</li>
          <li><MdEmail className="inline text-xl" /> wisnuajipamungkas354@gmail.com</li>
          <li><FaWhatsapp className="inline text-xl" /> <a href="https://wa.me/+6285889634432">+62 858-8963-4432</a></li>
        </ul>
        <ul>
          <li><FaInstagram className="inline text-xl" /> <a href="https://www.instagram.com/wisnuajipamungkas_">wisnuajipamungkas_</a></li>
          <li><FaLinkedin className="inline text-xl" /> <a href="https://www.linkedin.com/in/wisnuajipamungkas">Wisnu Aji Pamungkas</a></li>
          <li><FaGithub className="inline text-xl" /> <a href="https://www.github.com/wisnuajipamungkas354">Wisnu Aji Pamungkas</a></li>
        </ul>
        </div>
        <hr />
        <p className="mt-3 text-center">Copyright &copy; Wisnu Aji Pamungkas - 2025</p>
    </footer>
  );
}