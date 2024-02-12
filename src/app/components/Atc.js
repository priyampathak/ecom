import React from 'react'
import Image from 'next/image';
import Link from 'next/link';

export default function Atc(p) {
  return (
    <>
        <div className=" p-3 mt-7 lg:w-1/4 h-auto rounded-lg shadow-xl text-center mr-9 ml-9">
                    <div className="sm:h-72 p-6"><Image src={p.image} alt="img" height={300} width={300} className="mx-auto bg-transparent"/></div>
                    <h2 className="text-lg font-bold p-2">{p.title}</h2>
                    <div className="sm:h-24"><h2>{p.des}</h2></div>
                    <h2 className=" pt-2 font-semibold">{p.price}</h2>
                    <button className="bg-black text-white xl:w-72 sm:w-40 w-32 h-10 rounded-lg mt-6 mb-6 hover:bg-gray-900" onClick={()=>dispatch(increament())}> ⁠ADD TO CART</button>
                    
                </div>
    </>
  )
}
