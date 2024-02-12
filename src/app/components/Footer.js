import React from 'react'
import Image from "next/image";
import Link from 'next/link';
import imgs from '../../assets/ft.png'
import imgs1 from '../../assets/ft2.png'

export default function Footer() {
    return (
        <div className="flex flex-col lg:flex-row bg-neutral-900 h-auto w-full pt-6 pb-10">
        <div>
            <Image src = {imgs} className=" h-60 w-64" alt='img'/>
        </div>
        <div>
            <h2 className="text-gray-50 font-mono lg:pl-24 pl-16 pt-10 text-2xl">LOCATIONS</h2>
            <p className="text-gray-50 font-mono lg:pl-24 pl-16 pt-6 pr-4">
                Shop no. 7, B-23 Versova <br/>Andheri West, Mumbai, Maharastra. IN.
            </p>
            <p className="text-gray-50 font-mono lg:pl-24 pl-16 pt-6 pr-4">
                Shop no. E- 10, Rajiv Chowk<br/>Connaught Place, Delhi. IN.
            </p>
        </div>
        <div>
        <h2 className="text-gray-50 font-mono lg:pl-24 pl-16 pt-10 text-2xl">SOON AVAILABLE ON</h2>
            <p className="text-gray-50 font-mono lg:pl-24 pl-16 pt-6">
                Google Play Store<br/>Apple App Store
            </p>
        <h2 className="text-gray-50 font-mono lg:pl-24 pl-16 pt-6 text-2xl">Featuring ON</h2>
            <p className=" text-gray-400 font-mono lg:pl-24 pl-16 pt-6">
                All collection to this store<br/> will also be  feature on Goa's FW24 week. 
            </p>
        </div>
        <div>
            <Image src = {imgs1} className=" h-32 w-60 lg:pl-20 pl-16 pt-8" alt='img'/>
            <p className=" text-gray-400 font-mono lg:pl-20 pl-16 pt-6 text-xs pr-4">
                Co-Powered and collaborated with Main <br/> Streams Productions. Also grab your <br/>slots for Goa's FW24 week and do connect <br/> with Shoeistan social media handles for more updates.
            </p>
        </div>
    </div> 
)
}
