import React from 'react'
import Image from "next/image";

export default function protiles(p) {
    return (
    <>
        <div className="p-3 lg:w-1/4 h-auto rounded-lg shadow-xl text-center mr-9 ml-9">
                    <Image src={p.image} className=" h-64 mx-auto" alt='imgs'/>
                    <h2 className="text-lg font-bold p-2">{p.title}</h2>
                    <h2>{p.des}</h2>
                    <h2 className=" pt-2 font-semibold">{p.price}</h2>
                        <button className="bg-black text-white xl:w-72 sm:w-40 w-32 h-10 rounded-lg mt-6 mb-6 hover:bg-gray-900 ">
                            <button className="sm: mr-4 w-8" onClick={''}>+</button>
                            
                            <button className="sm: sm: ml-4 w-8" onClick={''}>-</button>
                        </button>
                </div>
    </>
    )
}
