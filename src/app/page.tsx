"use client";
import React from 'react';
import {
  Card,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Link from "next/link";

function Navbar() {
  return (
    <nav className="flex justify-center items-center p-4 border">
      <div>
        <a href="/" className="font-bold text-3xl">Menu</a>
      </div>
    </nav>
  );
}

export default function Home() {
  return (
    <div>
      <Navbar />

      <div className='flex flex-col items-center justify-between pl-24 pr-24 pb-24 pt-10'>
        <h1>This is menu page</h1>
      </div>
    </div>
  );
}
