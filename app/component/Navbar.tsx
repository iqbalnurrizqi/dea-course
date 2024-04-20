"use client";
import Link from "next/link";
import React from "react";
import NavbarBtn from "./NavbarBtn";

export default function Navbar(): React.ReactElement {
  return (
    <nav>
      <div className="navbar bg-base-100">
        <div className="container flex mx-auto justify-between p-4 ">
          <Link href="/" className=" text-xl font-bold">
            Open Dairy
          </Link>
          <NavbarBtn />
        </div>
      </div>
    </nav>
  );
}
