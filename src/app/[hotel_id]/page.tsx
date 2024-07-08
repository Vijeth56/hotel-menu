"use client";
import React, { useEffect, useState } from 'react';
import { Card, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";
const axios = require("axios");


const imageMapping: { [key: string]: string } = {
  food: "https://hotelbala-menu.s3.ap-southeast-2.amazonaws.com/food.jpeg",
  spa: "https://hotelbala-menu.s3.ap-southeast-2.amazonaws.com/spa.jpeg",
  laundry: "https://hotelbala-menu.s3.ap-southeast-2.amazonaws.com/laundry.jpeg",
};

function Page({ params }: { params: { hotel_id: string } }) {
  const { hotel_id } = params;
  const [hotelData, setHotelData] = useState<any[]>([]);
  const [loading, setLoading] = useState<boolean>(true);


  useEffect(() => {
    async function fetchData() {
      const hotel = await getHotelData();
      console.log(hotel);
      setHotelData(hotel);
      setLoading(false);
    }
    fetchData();
  }, []);

  async function getHotelData() {
    try {
      const response = await axios.get(`http://localhost:5000/api/getHotelDetails`, {
        params: {
          hotel_id: hotel_id
        }
      });

      if (response.status === 200) {
        return response.data;
      } else {
        console.log('Unexpected response status:', response.status);
      }
    } catch (error) {
      console.error('Error fetching menu data:', error);
    }
  }
  return (
    <>
     {loading ? (
        <div className="flex items-center justify-center h-screen">
          <div>Loading....</div>
        </div>
      ) : (
    <div>
      <nav className="flex justify-center items-center p-4 border">
      <div>
        <a className="font-bold text-3xl">{hotelData[0].hotel_name}</a>
      </div>
    </nav>
    
      <div className="flex flex-col items-center justify-between pl-24 pr-24 pb-24 pt-10">
        {hotelData[0]?.menu_types.map((menuType: string) => (
          <Link href={{ pathname: `/${hotel_id}/${menuType}` }} key={menuType}>
            <div className="lg:mt-2 mt-9 shadow-md">
              <Card backgroundImage={imageMapping[menuType]}>
                <CardHeader>
                  <CardTitle>{menuType.charAt(0).toUpperCase() + menuType.slice(1)}</CardTitle>
                </CardHeader>
                <CardFooter className="flex justify-between">
                  <p>See menu</p>
                  <p>→</p>
                </CardFooter>
              </Card>
            </div>
          </Link>
        ))}
      </div>
    </div>)}
    </>
  );
}

export default Page;
