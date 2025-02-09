import React, { useEffect, useState } from "react";
import '@smastrom/react-rating/style.css';
import { Rating } from '@smastrom/react-rating';
import Button from "../Components/Button";
import { FaSlack } from "react-icons/fa";
import { router } from "@inertiajs/react";
import { useForm } from "@inertiajs/react";
import { ImSpinner2 } from "react-icons/im";

export default function Review({ reviews }) {
  const [isError, setIsError] = useState(false);
  const [rating, setRating] = useState(0) // Initial value
  const [datas, setDatas] = useState(reviews);
  const [isDisabled, setIsDisabled] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  
  const { data, setData, post, errors, processing, reset, transform } = useForm({
    nama_reviewer: '',
    posisi: '',
    deskripsi: '',
    rating: rating,
  });


  const handleSubmitReview = () => {
    event.preventDefault();
    if(rating === 0) {
      setIsError(true);
      return;
    }

    setIsDisabled(true);

    transform((data) => ({
      ...data, rating: rating,
    }));

    post('/reviews', {
      preserveScroll: true,
      onSuccess: () => {
        reset();
        setRating(0);
    
        const valueData = {
          id: +new Date(),
          nama_reviewer: data.nama_reviewer,
          posisi: data.posisi,
          deskripsi: data.deskripsi,
          rating: rating,
          created_at: new Date(),
        }

        setDatas([valueData, ...datas]);
        setIsDisabled(false);
        setIsSuccess(true);

        setTimeout(() => {
          setIsSuccess(false);
        }, 6000);
      },
      onError: () => {
        alert('Sorry, somthing went wrong! Refresh the page and try again please!');
      }
    });
  }

  return (
    <div id="review" className="p-3 py-14">
      <h3 className="my-3 text-center text-2xl font-semibold mb-3"><span className="border-b-4 border-orange-500">Review & Comments</span></h3>
      <div className="flex flex-row flex-wrap gap-5 justify-center">
        <div className="bg-white text-black m-3 md:m-0 rounded-xl overflow-auto h-[25rem] relative shadow-lg w-full md:w-1/2">
          <span className="sticky top-0 z-[200] w-full h-[3rem] bg-white/40 shadow-lg backdrop-blur-sm flex flex-row justify-center">
          <h3 className="font-semibold text-center self-center">Reviews & Comments</h3>
          </span>
          { datas.length !== 0 ? datas.map((review) => {
            const dateReview = new Date(review.created_at);

            return (
              <div className="px-5 py-3 border-b-[1px] border-slate-300 relative text-wrap" key={review.id}>
                <h4 className="font-semibold">{review.nama_reviewer}</h4>
                <p className="text-slate-500 text-xs">{review.posisi}</p>
                <p className="mt-2 max-h-[3rem] text-wrap truncate">{review.deskripsi}</p>
                <span className="absolute top-3 right-4 text-slate-500">
                  <Rating className="w-20" value={review.rating} readOnly />
                  <p className="text-sm text-end">{dateReview.toLocaleDateString('id-ID')}</p>
                </span>
              </div>
              )}) : (
                <span className="py-3 text-center text-slate-300 text-lg h-[100%] flex flex-col justify-center align-center">
                  Belum Ada Review
                </span>
              )}
              <div className="sticky bottom-0 z-[200] w-full h-[3rem] bg-white/70 shadow-lg backdrop-blur-sm flex flex-row justify-center">
                <span>1</span>
              </div>
        </div>
        <form className="p-4 flex flex-col justify-start align-center w-full md:w-2/5 bg-white rounded-xl relative" onSubmit={handleSubmitReview}>
          <span className="h-20 flex flex-row justify-center">
            <h4 className="text-black text-center font-semibold self-center">Give me your <br /> Review & Comment</h4>
          </span>

          <Rating id="rating" className="max-w-56 self-center" value={rating} onChange={setRating} readOnly={isDisabled}/>
          <p className="text-red-600 text-center" hidden={!isError}>Give me your star, please!</p>

          <input id="nama_reviewer" className="m-3 mb-0 p-1 text-black bg-transparent border-b-[1px] focus:outline-none focus:border-blue-500" placeholder="Name" value={data.nama_reviewer} onChange={(e) => setData('nama_reviewer' ,e.target.value)} required disabled={isDisabled} />

          <input id="posisi" className="m-3 mb-0 p-1 text-black bg-transparent border-b-[1px] focus:outline-none focus:border-blue-500" placeholder="Status / Position" value={data.posisi} onChange={(e) => setData('posisi',e.target.value)} required disabled={isDisabled} />

          <textarea id="deskripsi" className="m-3 mb-0 p-1 text-black bg-transparent border-b-[1px] focus:outline-none focus:border-blue-500" placeholder="Your Review & Comments" maxLength={500} value={data.deskripsi} onChange={(e) => setData('deskripsi', e.target.value)} required disabled={isDisabled} />

          <span className={`mx-2 p-1 text-center border-2 border-green-600 bg-green-100 rounded ${isSuccess ? '' : 'hidden'}`}>Success! Thank you for submit your reviews</span>

          <Button type="submit" color={"primary"} isDisabled={processing}>
            <ImSpinner2 className={`animate-spin text-lg inline mx-1 mb-1 ${isDisabled ? '' : 'hidden'}`} /> Send
          </Button>
          <Button type="reset" color={"danger"} onClick={() => setRating(0)}>Reset</Button>
        </form>
      </div>
    </div>
  );
}