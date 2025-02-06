import React from "react";
import { FaCode } from "react-icons/fa";
import { HiMiniWrenchScrewdriver } from "react-icons/hi2";
import { RiPaintBrushFill } from "react-icons/ri";
import Badge from "../Components/Badge";

export default function SkillSet({}) {
  return (
    <div id="skill" className="p-3 py-20 bg-slate-900">
      <h2 className="pb-10 text-center text-xl md:text-2xl font-semibold text-white"><span className="border-b-4 border-b-orange-500">Skillset</span></h2>
      <div className="mb-3 flex flex-row flex-wrap gap-3 justify-center">
          <div className="p-3 bg-white text-black border-2 flex flex-col align-center max-w-80 scale-100 transition duration-300 ease-out hover:bg-gradient-to-r from-blue-600 to-sky-400 hover:ease-in hover:text-white hover:scale-105 hover:shadow-xl hover:border-yellow-300">
              <FaCode className="text-5xl mx-auto my-3"/>
              <h3 className="font-semibold text-lg text-center">
                Web Developer
              </h3>
              <p>Building website using HTML, CSS, PHP & JavaScript.</p>
              <div className="flex flex-row flex-wrap gap-1">
                <Badge bgColor="bg-red-700">Laravel</Badge>
                <Badge bgColor="bg-yellow-700">Filament</Badge>
                <Badge bgColor="bg-indigo-700">Livewire</Badge>
                <Badge bgColor="bg-blue-700">WordPress</Badge>
                <Badge bgColor="bg-sky-700">ReactJS</Badge>
                <Badge bgColor="bg-emerald-700">ExpressJS</Badge>
                <Badge bgColor="bg-slate-700">JQuery</Badge>
                
              </div>
          </div>
          <div className="p-3 bg-white text-black border-2 flex flex-col align-center max-w-80 scale-100 transition duration-300 ease-out hover:bg-gradient-to-r from-blue-600 to-sky-400 hover:ease-in hover:text-white hover:scale-105 hover:shadow-xl hover:border-sky-200">
              <HiMiniWrenchScrewdriver className="text-5xl mx-auto my-3"/>
              <h3 className="font-semibold text-lg text-center">
                Hardware Technician
              </h3>
              <p>Repairing Laptop & Computer Hardware.</p>
              <div className="flex flex-row flex-wrap gap-1">
                <Badge bgColor="bg-blue-700">OS & Driver Installation</Badge>
                <Badge bgColor="bg-yellow-700">Repairing I/O Issue</Badge>
                <Badge bgColor="bg-red-700">Upgrade Performance</Badge>
                <Badge bgColor="bg-emerald-700">Repairing Motherboard</Badge>
                <Badge bgColor="bg-slate-700">Solder & Blower Air</Badge>
                <Badge bgColor="bg-indigo-700">Schematic & BoardView</Badge>
                <Badge bgColor="bg-orange-700">Flash BIOS</Badge>
              </div>
          </div>
          <div className="p-3 bg-white text-black border-2 flex flex-col align-center max-w-80 scale-100 transition duration-300 ease-out hover:bg-gradient-to-r from-blue-600 to-sky-400 hover:ease-in hover:text-white hover:scale-105 hover:shadow-xl hover:border-yellow-300">
              <RiPaintBrushFill className="text-5xl mx-auto my-3"/>
              <h3 className="font-semibold text-lg text-center">
                Graphic Design
              </h3>
              <p>Designing Banner, Flyer, Custom Shirt, etc.</p>
              <div className="flex flex-row flex-wrap gap-1">
                <Badge bgColor="bg-yellow-600">Adobe Illustrator</Badge>
                <Badge bgColor="bg-blue-700">Canva</Badge>
                <Badge bgColor="bg-red-700">Figma</Badge>
              </div>
          </div>
      </div>
    </div>
  );
}