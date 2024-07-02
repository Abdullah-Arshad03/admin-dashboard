"use client";
import React from "react";
import Link from "next/link";
import { useSession } from "next-auth/react";

const HomePage = () => {
  const { status, data: session } = useSession();
  if (status === "loading") return null;

  return (
    <>
      <div>HomePage</div>
      {status === "authenticated" && (
        <>
          {" "}
          <Link href="/api/auth/signin">{session.user?.name}</Link>{" "}
          <Link href="/api/auth/signout">Logout</Link>
        </>
      )}

      {status === "unauthenticated" && (
        <Link href="/api/auth/signin">Login</Link>
      )}
      {/* this endpoint in the href is exposed by the next Auth */}
    </>
  );
};

export default HomePage;
