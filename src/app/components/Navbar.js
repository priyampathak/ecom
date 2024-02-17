"use client"
import React, { useEffect, useState } from 'react'
import Images from '../../assets/sw.png'
import Images1 from '../../assets/cart.png'
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation'


export default function Navbar(p) {
    const [col1, setCol1] = useState('#5B5B5B')
    const [col2, setCol2] = useState('#5B5B5B')
    const [col3, setCol3] = useState('#5B5B5B')
    const [col4, setCol4] = useState('#5B5B5B')

    // const col2 = p.color2 || '#5B5B5B'
    // const col3 = p.color3 || '#5B5B5B'
    // const col4 = p.color4 || '#5B5B5B'
    const [count, setCount] = useState(0)
    
    const pathname = usePathname()

    useEffect(()=>{
        if(pathname=='/'){
            setCol1('#010409')
        }
        else if(pathname=='/explore'){
            setCol2('#010409')
        }
        else if(pathname=='/outlets'){
            setCol3('#010409')
        }
        else if(pathname=='/profile'){
            setCol4('#010409')
        }
    })
    


    return (
        <>

        {count < 1 ?(
            <div className="flex px-12 pb-2 shadow-xl w-screen">
            <div className="flex w-3/4 pt-4">
                <Link className="font-medium style list-none" href="/"><Image src={Images} className=" h-16" height={45} width={60} alt='img'/></Link>
                <Link className="font-medium style list-none py-4 pl-16 hidden lg:block" style={{color:col1}} href="/" >Home</Link>
                <Link className="font-medium style list-none py-4 pl-16 hidden lg:block" style={{color:col2}} href='/explore'>Explore</Link>
                <Link className="font-medium style list-none py-4 pl-16 hidden lg:block" style={{color:col3}} href='/outlets'>Outlets</Link>
            </div>
            <div className="flex w-1/4 justify-end sm:pr-12 ">
                <Link className="font-medium style list-none py-4 pr-16 mt-4 hidden lg:block"style={{color:col4}} href='/profile'>Profile</Link>
                <button className="font-medium"><Link href='/Cart'><Image src = {Images1} className="h-8 pt-1 hidden lg:block" height={15} width={30} alt="img"/></Link></button>

                <Link href={''} className="font-medium style list-none py-4 mt-4 block lg:hidden" onClick={()=>setCount(1)}>Menu</Link>
            </div>
        </div>  
        ) : 
        
            (
            <div>
                <div className="flex px-12 pb-2 shadow-xl w-screen h-80">
                    <div className="flex w-3/4 pt-4">
                        <Link className="font-medium style list-none" href="/"><Image src={Images} className=" h-16" height={45} width={60} alt="img"/></Link>
                        
                    </div>
                    <div className="flex w-1/4 justify-end sm:pr-12 ">
                        

                        <Link href={''} className="font-medium style list-none py-4 mt-4 block " onClick={()=>setCount(0)}>Close</Link>
                    </div>
                </div>  
                    <Link href='/'><h2 className="absolute text-center w-screen top-32 text-base font-bold" style={{color:col1}}>Home</h2></Link>
                    <Link href='/explore'><h2 className="absolute text-center w-screen top-40 text-base font-bold" style={{color:col2}}>Explore</h2></Link>
                    <Link href='/outlets'><h2 className="absolute text-center w-screen top-48 text-base font-bold" style={{color:col3}}>Outlets</h2></Link>
                    <Link href='/profile'><h2 className="absolute text-center w-screen top-56 text-base font-bold" style={{color:col4}}>Profile</h2></Link>
                    <Link href='/Cart'><h2 className="absolute text-center w-screen top-64 text-base font-bold" style={{color:'#2F2F2F'}}>Cart</h2></Link>
            </div>
        )
        
        }    
        </>
    )
}
