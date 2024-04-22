import React from 'react';
import {
  Card,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";



function Navbar() {
  return (
    <nav className="flex justify-center items-center p-4 border">
      <div>
        <a href="/" className="font-bold text-3xl">Ambaari</a>
      </div>
    </nav>
  );
}



export default function Home() {
  return (

    <div>
<Navbar />

<div className='flex flex-col items-center justify-between pl-24 pr-24 pb-24 pt-10'>
      <div className="lg:mt-2 mt-9 shadow-md">
        <Card>
          <CardHeader>
            <CardTitle>Laundry</CardTitle>
          </CardHeader>
          <CardFooter className="flex justify-between">
            <p>See menu</p>
            <p>→</p>
          </CardFooter>
        </Card>
      </div>

      <div className="lg:mt-2 mt-9 shadow-md">
        <Card>
          <CardHeader>
            <CardTitle>Food</CardTitle>
          </CardHeader>
          <CardFooter className="flex justify-between">
            <p>See menu</p>
            <p>→</p>
          </CardFooter>
        </Card>
      </div>

      <div className="lg:mt-2 mt-9 shadow-md">
        <Card>
          <CardHeader>
            <CardTitle>Spa</CardTitle>
          </CardHeader>
          <CardFooter className="flex justify-between">
            <p>See menu</p>
            <p>→</p>
          </CardFooter>
        </Card>
      </div>
    </div>

    </div>
  );
}
