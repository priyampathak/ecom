"use client"
import React from 'react'
import useSWR from 'swr';
import Image from 'next/image';
import bbt1 from '../../../assets/bbt1.png'
import Navbar from '@/app/components/Navbar';
import Footer from '@/app/components/Footer';
import { Result } from 'postcss';

const fetcher = (...args) => fetch(...args).then((res) => res.json());

export default function page({params}) {

  const { data, error } = useSWR(`http://localhost:3000/api/prods/${params.prodetail[0]}`, fetcher);
  if (error) return <div>Error loading data</div>;
  if (!data) return <div>Loading...</div>;

  console.log(data);
  
  return (
    <>
    <div className="overflow-hidden">
    <Navbar />
      <div className="flex m-16 mt-20">
        <div><Image src={data.result.img} alt='img' height={600} width={600} /></div>
        <div>
          <h1 className=" ml-64 mt-20 font-extrabold text-3xl">{data.result.name}</h1><br></br>
          <h1 className=" ml-64 text-xl">{data.result.discription}</h1><br></br>
          <h1 className=" ml-64 text-lg text-gray-600">Buy not at ath the price of</h1><br></br>
          <h1 className=" ml-64 text-xl">{`₹ ${data.result.price}`}</h1><br></br>
        </div>
      </div>
      </div>
    <Footer />
    </>
  )
}
