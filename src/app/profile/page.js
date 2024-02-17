"use client"
import React, { useEffect } from 'react'
import Navbar from '../components/Navbar'
import { useSession } from 'next-auth/react'
import { redirect } from 'next/navigation'
import { signOut } from 'next-auth/react'

export default function page() {
  const { data : session, status } = useSession();

  useEffect(()=>{
    if(status === "unauthenticated"){
      redirect("/login");
    }
  }, [status]);

  const handleLogout = async()=>{
    await signOut();
  };

  if(status !== "authenticated" || !session){
    return null
  }

  if (status === "loading") {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <Navbar />
      <button onClick={handleLogout}>Logout</button>
    </div>
  )
}
