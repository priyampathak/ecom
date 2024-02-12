"use client"
import React from 'react';
import Image from 'next/image';
import Navbar from '../components/Navbar';
import Protiles from '../components/Protiles'; // Corrected component name
import useSWR from 'swr';
import Atc from '../components/Atc';
import Footer from '../components/Footer';
import Link from 'next/link';

const fetcher = (...args) => fetch(...args).then((res) => res.json());

export default function Page() { // Corrected component name to start with a capital letter

  const { data, error } = useSWR("http://localhost:3000/api/prods", fetcher);
  const count = 0

  if (error) return <div>Error loading data</div>;
  if (!data) return <div>Loading...</div>;

  console.log(data);

  return (
    <><div className="overflow-hidden">
      <Navbar />
      <div className="flex flex-wrap overflow-hidden sm:ml-28 pb-16">
      {Array.from({ length: 6 }, (_, i) => (
        <div key={i} className=" p-3 mt-7 lg:w-1/4 h-auto rounded-lg shadow-xl text-center mr-9 ml-9 ">
        <div className="sm:h-72 p-6"><Image src={data.result[i]?.img} alt="img" height={300} width={300} className="mx-auto bg-transparent"/></div>
        <h2 className="text-lg font-bold p-2">{data.result[i]?.name}</h2>
        <div className="sm:h-24"><h2>{data.result[i]?.discription}</h2></div>
        <h2 className=" pt-2 font-semibold">{`₹ ${data.result[i]?.price}`}</h2>
        <Link href={`/explore/${data.result[i]._id}`}><button className="bg-black text-white xl:w-72 sm:w-40 w-32 h-10 rounded-lg mt-6 mb-6 hover:bg-gray-900"> ⁠ADD TO CART</button></Link>
        </div>
    
      ))}
      </div>
    <Footer />
    </div>
    </>
  );
}
