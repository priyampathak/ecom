"use client"
import React from 'react'
import useSWR from 'swr';
import Image from 'next/image';
import bbt1 from '../../../assets/bbt1.png'
import Navbar from '@/app/components/Navbar';
import Footer from '@/app/components/Footer';
import { Result } from 'postcss';
import hrt from '../../../assets/heartuf.png'

const fetcher = (...args) => fetch(...args).then((res) => res.json());

export default function Page({params}) {

  const { data, error } = useSWR(`/api/prods/${params.prodetail[0]}`, fetcher);
  if (error) return <div>Error loading data</div>;
  if (!data) return <div>Loading...</div>;
  var obj = data.result.size;
  
  
  return (
    <>
    <div className="overflow-hidden">
    <Navbar />
      <div className="sm:flex sm:m-16 mt-20">
        <div><Image src={data.result.img} alt='img' height={600} width={600} /></div>
        <div className="mt-12  ml-10 sm:ml-60">
          <h1 className="sm:ml-4 font-extrabold text-2xl sm:text-3xl">{data.result.name}</h1><br></br>
          <h1 className="sm:ml-4 sm:mr-0 mr-14 text-xl">{data.result.discription}</h1><br></br>
          <h1 className="sm:ml-4 text-lg text-gray-600">Buy now at ath the price of</h1><br></br>
          <h1 className="sm:ml-4 text-xl">{`₹ ${data.result.price}`}</h1><br></br>
          <h1 className="sm:ml-4 text-lg text-gray-600">Available sizes are</h1><br></br>
            
          {
            Object.entries(obj).map(([key, value]) => (
              <button
                key={key} // Make sure to provide a unique key for each button
                className={`ml-2 sm:ml-4 bg-slate-200 w-16 h-10 rounded-2xl border-2 mb-6 ${value === "0" ? 'border-black' : 'border-gray-200'}`}
              >
                {key}
              </button>
            ))
          }

          <div className="sm:ml-4 flex mt-6 mb-20">
          <button className="h-12 rounded-md sm:w-48 w-36 text-black bg-neutral-400"><div className='flex'><Image src={hrt} alt='img' height={30} width={25} className="ml-5 sm:ml-10 mt-1" /><h1 className="ml-3 mt-1">Wishlist</h1></div></button>
          <button className="sm:ml-10 ml-2 h-12 rounded-md sm:w-48 w-36 text-white bg-black mt4">Add to cart</button>

          </div>
        </div>
      </div>
      </div>
    <Footer />
    </>
  )
}
