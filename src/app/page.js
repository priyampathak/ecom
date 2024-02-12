import Image from "next/image";
import Navbar from "./components/Navbar";
import imgs from '../assets/s1.png';
import imgs2 from '../assets/sp1.png';
import imgs3 from '../assets/sn1.png';
import imgs4 from '../assets/br1.png';
import imgs5 from '../assets/bt1.png';
import Link from 'next/link';
import Footer from "./components/Footer";

export default function Home() {
    return (
        <main className=" overflow-hidden">
            <Navbar />
            <div className="flex flex-col lg:flex-row h-auto w-full lg:pr-16 pb-24 lg:pt-24 pt-12">
                <div className="w-full lg:w-1/2 pt-1 lg:pt-40 pb-20 lg:pb-0 justify-center flex">
                    <h2 className="pt-10 lg:text-7xl font-extrabold text-3xl pl-6">Your Feet<br />Deserves The Best!</h2>
                </div>
                <div className="w-full lg:w-1/2 flex justify-center">
                    <Image src = {imgs} className=" lg:h-full h-72 ml-4" alt="img"/>
                </div>
            </div>

            <hr className=" w-screen h-1 bg-black opacity-30 m-4"/>

            <div className="flex w-screen flex-col lg:flex-row">
                <div className="text-center w-screen">
                    <h2 className=" font-extrabold text-4xl p-4">THE COLLECTION IS HERE</h2>
                </div>
            </div>

            <div className="flex flex-col lg:flex-row">
                <div className="lg:w-1/4 h-auto rounded-lg shadow-xl m-8 p-4 text-center">
                    <h2 className="text-lg font-medium pb-8">Flexible Sports Wear</h2>
                    <Image src={imgs2} className="h-30" alt="img"/>
                </div>
                <div className="lg:w-1/4 h-auto rounded-lg shadow-xl m-8 p-4 text-center">
                    <h2 className="text-lg font-medium pb-8">Sneakers With Trend</h2>
                    <Image src={imgs3} className="h-30" alt="img"/>
                </div>

                <div className="lg:w-1/4 h-auto rounded-lg shadow-xl m-8 p-4 text-center">
                    <h2 className="text-lg font-medium pb-8">Style With Brogues</h2>
                    <Image src={imgs4} className=" h-92" alt="img"/>
                </div>

                <div className="lg:w-1/4 h-auto rounded-lg shadow-xl m-8 p-4 text-center">
                    <h2 className="text-lg font-medium pb-8">Being Your Boots</h2>
                    <Image src={imgs5} className="h-30" alt="img"/>
                </div>
            </div>
            <hr className=" w-screen h-1 bg-black opacity-30 m-4 mb-8"/>
                <div className="relative">
                
                <div className="bg-slate-800 h-52 m-2 flex flex-col lg:flex-row rounded-md">
                    <div className="text-center w-screen lg:m-8 mt-10 lg:mt-10 lg:text-5xl font-bold text-2xl"><h2 className="text-white">GET EXTRA 25% OFF</h2></div>
                </div>
                <button className="absolute lg:top-36 top-32 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-opacity-50 bg-blur-md bg-slate-500 text-white px-4 py-2 rounded">
                    <Link href = '/explore'>SHOP NOW</Link>
                </button>
            </div>
            <Footer />
        </main>
    );
}

// priyampathak7
// UuZU3yAhrJFCS7zX
//productDB -> database name
//products  -> cluster name