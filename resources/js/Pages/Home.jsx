import React, { useState, useEffect} from "react";
import Button from "../Components/Button";

export default function Home({}) {
  const listKeahlian = ['Web Developer', 'Technician'];

  const [isVisible, setIsVisible] = useState(false);
  const [displayText,setDisplayText] = useState();
  const [keahlian, setKeahlian] = useState(listKeahlian[0]);
  const [cursor, setCursor] = useState(true);

  let interval = 4000;

  useState(() => {
    setTimeout(() => {
      setIsVisible(true);
    }, 500);
  });

  useEffect(() => {
    console.log('diluar blok timeout');
    const currentIndex = listKeahlian.indexOf(keahlian);
    setTimeout(() => {
        if(currentIndex < listKeahlian.length) {
          setKeahlian(listKeahlian[currentIndex + 1]);
          console.log('blok if');
        } else if(currentIndex == listKeahlian.length) {
          console.log('blok else');
          setKeahlian(listKeahlian[0]);
        }
        console.log('blok diluar');
        console.log(currentIndex);
        console.log(listKeahlian.length);
        let intervalText;
        if(keahlian.length < 10) {
          intervalText = interval / (keahlian.length + 10);
          console.log('blok intervaltext if');
        } else {
          console.log('blok intervaltext else');
          intervalText = interval / (keahlian.length + 20);
        }
        for(let i = 0; i <= keahlian.length; i++) {
          setTimeout(() => setDisplayText(keahlian.substring(0, i)), intervalText * i);
        }
        console.log('selesai perulangan for');
      }, interval);
  }, [keahlian]);

  useEffect(() => {
    setTimeout(() => {
      cursor ? setCursor(false) : setCursor(true);
    }, 400);
  }, [cursor]);

  return (
  <div id="home" className="p-3 h-[80vh] flex flex-row justify-center items-center bg-gradient-to-b from-sky-400 to-indigo-600">
    <div className={`flex flex-col flex-wrap justify-center items-center gap-x-12 gap-y-5 duration-1000 ease-in-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
      <div className="rounded-full bg-orange-50">
        <img src="/img/profile.png" className="rounded-full w-48 md:w-56" alt="Gambar Profil"/>
      </div>
      <div className="flex flex-col justify-center items-center">
        <h3 className="text-transparent text-center text-2xl md:text-3xl text-white">Hi, I'm Wisnu Aji Pamungkas</h3>
        <h1 className="text-white text-center text-3xl md:text-4xl font-semibold">a <span className="font-bold text-yellow-300" >{displayText}</span> <span className={`absolute ${cursor ? 'inline' : 'hidden'}`}> |</span></h1>
        {/* <span className="flex flex-row flex-wrap justify-center">
          <Button type="button" color="primary" onClick={() => {}}>Hubungi Saya</Button>
          <Button type="button" color="warning" onClick={() => {}}>Beri Ulasan</Button>
        </span> */}
      </div>
    </div>
  </div>
  );
}