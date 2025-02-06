import React, { useState } from "react";
import '@smastrom/react-rating/style.css';
import { Rating } from '@smastrom/react-rating';
import Button from "../Components/Button";

export default function Review({}) {
  const [rating, setRating] = useState(0) // Initial value

  return (
    <div id="review" className="p-3 py-14">
      <h3 className="my-3 text-center text-2xl font-semibold mb-3"><span className="border-b-4 border-orange-500">Review & Comments</span></h3>
      <div className="flex flex-row flex-wrap gap-5 justify-center">
        <div className="bg-white text-black m-3 md:m-0 rounded-xl overflow-auto h-[25rem] relative shadow-lg">
          <span className="sticky top-0 z-[200] w-full h-[3rem] bg-white/40 shadow-lg backdrop-blur-sm flex flex-row justify-center">
          <h3 className="font-semibold text-center self-center">Reviews & Comments</h3>
          </span>
          <div className="px-5 py-3 border-b-[1px] border-slate-300 relative">
            <h4 className="font-semibold">Achmad Yasir Munadi</h4>
            <Rating className="w-10" />
            <p className="text-slate-500 text-xs">HSE Spesialist at PT Hyundai Glovis</p>
            <p>Lorem ipsum sit dolor amet ipsum lorem get concate saerds mnxcw</p>
            <span className="absolute top-3 right-4 text-slate-500">24 Jan 2025</span>
          </div>
          <div className="px-5 py-3 border-b-[1px] border-slate-300 relative">
            <h4 className="font-semibold">Suryo Aji</h4>
            <p className="text-slate-500 text-xs">HSE Spesialist at PT Hyundai Glovis</p>
            <p>Lorem ipsum sit dolor amet ipsum lorem get concate saerds mnxcw</p>
            <span className="absolute top-3 right-4 text-slate-500">24 Jan 2025</span>
          </div>
          <div className="px-5 py-3 border-b-[1px] border-slate-300 relative">
            <h4 className="font-semibold">Arfan Faeza Atallah</h4>
            <p className="text-slate-500 text-xs">HSE Spesialist at PT Hyundai Glovis</p>
            <p>Lorem ipsum sit dolor amet ipsum lorem get concate saerds mnxcw</p>
            <span className="absolute top-3 right-4 text-slate-500">24 Jan 2025</span>
          </div>
          <div className="px-5 py-3 border-b-[1px] border-slate-300 relative">
            <h4 className="font-semibold">Alesha Zahra</h4>
            <p className="text-slate-500 text-xs">HSE Spesialist at PT Hyundai Glovis</p>
            <p>Lorem ipsum sit dolor amet ipsum lorem get concate saerds mnxcw</p>
            <span className="absolute top-3 right-4 text-slate-500">24 Jan 2025</span>
          </div>
          <div className="px-5 py-3 border-b-[1px] border-slate-300 relative">
            <h4 className="font-semibold">Abdul Aziz</h4>
            <p className="text-slate-500 text-xs">HSE Spesialist at PT Hyundai Glovis</p>
            <p>Lorem ipsum sit dolor amet ipsum lorem get concate saerds mnxcw</p>
            <span className="absolute top-3 right-4 text-slate-500">24 Jan 2025</span>
          </div>
        </div>
        <form className="p-4 flex flex-col justify-start align-center w-full md:w-2/5 bg-white rounded-xl relative">
          <span className="h-20 flex flex-row justify-center">
            <h4 className="text-black text-center font-semibold self-center">Give me your <br /> Review & Comment</h4>
          </span>
          <Rating className="max-w-56 self-center" value={rating} onChange={setRating} />
          <input className="m-3 mb-0 p-1 text-black bg-transparent border-b-[1px] focus:outline-none focus:border-blue-500" placeholder="Name" />
          <input className="m-3 mb-0 p-1 text-black bg-transparent border-b-[1px] focus:outline-none focus:border-blue-500" placeholder="Status / Position" />
          <textarea className="m-3 mb-0 p-1 text-black bg-transparent border-b-[1px] focus:outline-none focus:border-blue-500" placeholder="Your Review & Comments" />
          <Button type="submit" color={"primary"}>Send</Button>
          <Button type="reset" color={"danger"} onClick={() => setRating(0)}>Reset</Button>
        </form>
      </div>
    </div>
  );
}