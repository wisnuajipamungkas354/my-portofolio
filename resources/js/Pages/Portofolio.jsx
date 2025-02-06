import React, { useState } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import Badge from "../Components/Badge";

export default function Portofolio({}) {
  const [tabIndex, setTabIndex] = useState(0);

  return (
    <div id="portofolio" className="p-2 py-20 text-sky-700 bg-sky-50">
      <h2 className="text-center text-2xl font-semibold"><span className="border-b-4 border-orange-400">Portofolio</span></h2>
      <Tabs className="my-6" selectedIndex={tabIndex} onSelect={index => setTabIndex(index) }>
        <TabList className="flex flex-row justify-center align-center">
          <Tab className={`${tabIndex == 0 ? 'border-b-2 border-orange-500 bg-gradient-to-t from-slate-300/[0.3]' : ''} cursor-pointer p-1 px-3 focus:outline-none`}>All</Tab>
          <Tab className={`${tabIndex == 1 ? 'border-b-2 border-orange-500 bg-gradient-to-t from-slate-300/[0.3]' : ''} cursor-pointer p-1 px-3 focus:outline-none`}>Website</Tab>
          <Tab className={`${tabIndex == 2 ? 'border-b-2 border-orange-500 bg-gradient-to-t from-slate-300/[0.3]' : ''} cursor-pointer p-1 px-3 focus:outline-none`}>Certificate</Tab>
        </TabList>

        <TabPanel className={"m-auto p-2 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 max-w-[95vw] max-h-[75vh] overflow-auto"}>
          <div className="bg-white p-2 max-w-full md:w-30 max-h-[25rem]">
              <img src="/img/mudamudiapps.png" alt="Gambar Portofolio" className="w-full h-36 bg-slate-700 my-3"/>
              <h3 className="text-center font-semibold text-lg my-3">Mudamudi Apps</h3>
              <p className="text-justify">Building Fullstack Web using TALL Stack (TailwindCSS, AlpineJS, Laravel, Livewire) + Filament</p>
              <div className="mt-3 flex flex-row flex-wrap gap-2">
                <Badge bgColor="bg-red-700">Laravel</Badge>
                <Badge bgColor="bg-yellow-700">Filament</Badge>
                <Badge bgColor="bg-indigo-700">Livewire</Badge>
                <Badge bgColor="bg-slate-700">JQuery</Badge>
              </div>
          </div>
          <div className="bg-white hover:border-yellow-500 p-2 max-h-[25rem]">
              <h3 className="text-center">KneeCheck App</h3>
              <p>Lorem ipsum sit dolor amet blasq covar slate orsea cmas</p>
              <div className="mt-3 flex flex-row gap-2">
                <Badge bgColor="bg-red-700">Google Cloud Platform</Badge>
                <Badge bgColor="bg-blue-700">ExpressJS</Badge>
              </div>
          </div>
          <div className="bg-white p-2 max-w-full md:w-30 max-h-[25rem]">
              <img src="/img/mudamudiapps.png" alt="Gambar Portofolio" className="w-full h-36 bg-slate-700 my-3"/>
              <h3 className="text-center font-semibold text-lg my-3">Mudamudi Apps</h3>
              <p className="text-justify">Building Fullstack Web using TALL Stack (TailwindCSS, AlpineJS, Laravel, Livewire) + Filament</p>
              <div className="mt-3 flex flex-row gap-2">
                <Badge bgColor="bg-red-700">Laravel</Badge>
                <Badge bgColor="bg-yellow-700">Filament</Badge>
                <Badge bgColor="bg-indigo-700">Livewire</Badge>
                <Badge bgColor="bg-slate-700">JQuery</Badge>
              </div>
          </div>
          <div className="bg-white hover:border-yellow-500 p-2 max-w-full md:max-w-sm max-h-[25rem]">
              <h3 className="text-center">Service Laptop Management</h3>
              <p>Lorem ipsum sit dolor amet blasq covar slate orsea cmas</p>
              <div className="mt-3 flex flex-row gap-2">
                <Badge bgColor="bg-red-700">Laravel</Badge>
                <Badge bgColor="bg-slate-700">JQuery</Badge>
              </div>
          </div>
        </TabPanel>
        <TabPanel>
          <h2>This is Website Content</h2>
        </TabPanel>
        <TabPanel>
          <h2>This is Certificate Content</h2>
        </TabPanel>
  </Tabs>
    </div>
  );
}