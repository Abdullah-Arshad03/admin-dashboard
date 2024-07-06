"use client";
import React from "react";
import Link from "next/link";
import { useSession } from "next-auth/react";
import style from './page.module.css'


const HomePage = () => {
  const { status, data: session } = useSession();
  if (status === "loading") return null;

  return (
    <>
    <div className={style.container}>
       <div className={style.heading}>
        Welcome! to the Admin Dashboard
       </div>
      { 
      status === 'unauthenticated'&& (
       <div className={style.subheading}>
       Login to see all insights
       </div>
       )
       }
      {status === "authenticated" && (
        <>
          {" "}
       <div  className={style.subheading}>{session.user?.name}</div>
        <button className={style.btn}> <Link href="/api/auth/signout">Logout</Link> </button>
        </>
      )}

      {status === "unauthenticated" && (
        <button className={style.btn}> <Link href="/api/auth/signin">Login</Link></button>
      )}
      {/* this endpoint in the href is exposed by the next Auth */}
      
    </div>
    </>
  );
};

export default HomePage;
