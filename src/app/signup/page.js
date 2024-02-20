"use client"
import React, { useState } from 'react'
import Navbar from '../components/Navbar'
import Link from 'next/link'


export default function Page() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [fname, setFname] = useState('')
    const [lname, setLname] = useState('')

    const handleSignIn = async (e) => {
        e.preventDefault()
        var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        const errors = [];
        
        if (fname.trim() === '') {
            errors.push('First name can not be blank');
          }
          if (lname.trim() === '') {
            errors.push('Last name can not be blank');
          }
          if (!emailRegex.test(email)) {
            errors.push('Please enter a valid email address.');
          }
          if (password.trim() === '' || password.length < 4) {
            errors.push('Password can not be less than 4 characters');
          }
          console.log(fname, lname, email, password)
      }
  return (
    <>
    <Navbar />
    <form onSubmit={handleSignIn}>
    <div  className="flex items-center justify-center h-full mt-24">

        <div className="mt-1 bg-neutral-800 w-1/3 pt-6 pb-6 rounded-lg text-center">

          <h1 className="text-white font-semibold text-2xl mb-8 mt-4">Create an account</h1>
          <label className="hidden">Fname:</label>
          <input className=" mb-4 rounded-md h-8 p-2" type="text" value={fname} onChange={(e) => setFname(e.target.value)} placeholder='First Name'/> <br />
          <label className="hidden">Lname:</label>
          <input className=" mb-4 rounded-md h-8 p-2" type="text" value={lname} onChange={(e) => setLname(e.target.value)} placeholder='Last Name'/> <br />
          <label className="hidden">Email:</label>
          <input className=" mb-4 rounded-md h-8 p-2" type="Email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder='Email'/> <br />
          <label className="hidden">Password:</label>
          <input className=" mb-4 rounded-md h-8 p-2" type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder='Password'/> <br />
          <button className = " w-2/4 h-10 mt-2 mb2 rounded-md bg-slate-100" type="submit">Create</button>
          <h1 className="text-white text-md mt-6 mb-4">Are you already a user? <Link href='/login' className=" text-blue-500"> Login Here </Link></h1>
        </div>
        </div></form>
    </>
  )
}
