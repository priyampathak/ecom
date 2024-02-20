"use client"
import React, { useState } from 'react'
import Navbar from '../../components/Navbar'
import { signIn } from 'next-auth/react'
import { useSession } from 'next-auth/react'
import { redirect } from 'next/navigation'
import Link from 'next/link'


export default function Page() {
  const { data : session, status } = useSession();
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleSignIn = async (e) => {
    e.preventDefault()
    await signIn('credentials', {
      email,
      password,
      callbackUrl: '/', // Redirect URL after successful login
    })
  }


  if(status == "authenticated"){
    redirect("/")
  }

  if (status === "loading") {
    return <div>Loading...</div>;
  }

  return (
      <>
        <Navbar />

        <div  className="flex items-center justify-center h-full">
        <div className="mt-24 pl-4 bg-red-800 w-1/3 pt-2 pb-2 rounded-lg text-center">
        <h1 className="text-white text-start text-md mb-2 mt-2">Error while Login, Id or Password does not match, check the credentials and try again.</h1>
        </div></div>

        <form onSubmit={handleSignIn}>

        <div  className="flex items-center justify-center h-full">

        <div className="mt-1 bg-neutral-800 w-1/3 pt-6 pb-6 rounded-lg text-center">

          <h1 className="text-white font-semibold text-2xl mb-8 mt-4">Login with credentials</h1>
          <label className="hidden">Email:</label>
          <input className=" mb-4 rounded-md h-8 p-2" type="Email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder='Email'/> <br />
          <label className="hidden">Password:</label>
          <input className=" mb-4 rounded-md h-8 p-2" type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder='Password'/> <br />
          <button className = " w-2/4 h-10 mt-2 mb2 rounded-md bg-slate-100" type="submit">Log In</button>
          <h1 className="text-white text-md mt-6 mb-4">Are you a new user? <Link href='/signup' className=" text-blue-500"> Signup Here </Link></h1>
        </div>
        </div></form>
      </>
  )
}
