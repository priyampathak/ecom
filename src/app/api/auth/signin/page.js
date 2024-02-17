// pages/api/auth/signin.js
"use client"
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { redirect } from "next/navigation";

export default function BlockedSignIn() {

  useEffect(() => {
    // Redirect to another page when this page is accessed
    redirect("/login"); // You can redirect to any page you want
  }, []);

  // This component doesn't render anything, as it's used for redirection
  return null;
}
