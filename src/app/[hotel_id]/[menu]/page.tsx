"use client";
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
const axios = require("axios");

function Page({ params }: { params: { hotel_id: string; menu: string } }) {
  const { hotel_id, menu } = params;
  const [loading, setLoading] = useState<boolean>(true);
  const [menuData, setMenuData] = useState<any[]>([]);

  useEffect(() => {
    async function fetchData() {
      const menus = await getMenuData();
      setMenuData(menus);
      setLoading(false); 
    }
    fetchData();
  }, []);

  async function getMenuData() {
    try {
      const response = await axios.get(`http://localhost:5000/api/getMenu`, {
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
    <div>
      {loading ? (
        <div className="flex items-center justify-center h-screen">
          <div>Loading....</div>
        </div>
      ) : (
        menuData
          .filter(
            (menu) =>
              menu.menu_type === params.menu && menu.hotel_id === params.hotel_id
          )
          .map((menu, index) => (
            <div key={index}>
              <div className="overflow-hidden mx-auto max-w-full md:max-w-screen-sm">
                <Image
                  src={menu.menu_url}
                  alt={`${menu.menu_type} menu`}
                  width={500}
                  height={300}
                />
              </div>
            </div>
          ))
      )}
    </div>
  );
}

export default Page;
