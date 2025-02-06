import React from "react";
import { FaCircle } from "react-icons/fa6";

export default function Experience({}) {
  return (
    <div id="experience" className="w-full p-3 py-20 bg-gradient-to-b from-white from-10% via-indigo-200 via-40% to-white to-90% relative">
      <h3 className="text-center text-emerald-800 text-2xl font-semibold">My <span className="text-blue-800 border-b-4 border-orange-500">Experience</span></h3>
      <div className="my-[5rem] grid grid-cols-2">
        <div className="p-2 py-5 border-r-2 border-r-black text-right relative z-10">
            <div className="px-1 pr-4 md:px-5 md:pr-5 relative -top-10">
              <h3 className="font-semibold text-lg">Cloud Computing</h3>
              <span className="text-xs text-slate-500 font-semibold" > Sep 2024 - Jan 2025 </span>
              <p className="text-slate-500">Bangkit Academy led by Google, Tokopedia, Gojek & Traveloka</p>
              <p>Studying about Cloud Computing, Google Cloud Platform, Git & GitHub, Machine Learning Implementation, Deploy App into GCP, etc</p>
            </div>
            <span className="absolute flex -right-4 top-0 border-2 border-emerald-600 bg-white rounded-full w-8 h-8">
              <FaCircle className="text-1xl m-auto text-emerald-600" />
            </span>
        </div>
        <div></div>
        <div className="p-2 py-5 border-r-2 border-r-black text-right relative z-10">
            <span className="absolute flex -right-4 top-0 border-2 border-slate-600 bg-white rounded-full w-8 h-8">
              <FaCircle className="text-1xl m-auto text-slate-600" />
            </span>
        </div>
        <div className="p-2 py-5 text-left relative z-10">
            <div className="px-1 pl-4 md:px-5 md:pr-5 relative -top-10">
              <h3 className="font-semibold text-lg">Freelance Frontend Web Developer</h3>
              <span className="text-xs text-slate-500 font-semibold" > Jul 2024 - Ags 2025 </span>
              <p className="text-slate-500">PT Bagus Harapan Tritunggal (BHT)</p>
              <p>Slicing views / convert figma design into HTML code using ReactJS, Integrate API</p>
            </div>
        </div>
        <div className="p-2 py-5 border-r-2 border-r-black text-right relative z-10">
            <div className="px-1 pr-4 md:px-5 md:pr-5 relative -top-10">
              <h3 className="font-semibold text-lg">Computer Network Engineer</h3>
              <span className="text-xs text-slate-500 font-semibold" > Okt 2018 - Des 2024 </span>
              <p className="text-slate-500">PT PLN (Persero) UPT Karawang</p>
              <p>Controlling & Monitoring Local Network, Create VLAN & Routing Configuration, Repairing Local Network, Repairing Computer & Laptop</p>
            </div>
            <span className="absolute flex -right-4 top-0 border-2 border-slate-600 bg-white rounded-full w-8 h-8">
              <FaCircle className="text-1xl m-auto text-slate-600" />
            </span>
        </div>
      </div>
    </div>
  );
}