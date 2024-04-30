"use client";
import React, { useEffect, useState } from 'react';
import Image from 'next/image';

interface MenuItem {
  type: string;
  url: string;
}

interface SearchParams {
  title: string;
}

function Page({ searchParams }: { searchParams: SearchParams }) {
  const [menuItems, setMenuItems] = useState<MenuItem[]>([]);
  const [loading, setLoading] = useState<boolean>(true); // Loading state

  useEffect(() => {
    fetchMenus().then((menus) => {
      setMenuItems(menus);
      setLoading(false); // Set loading to false when menu items are fetched
    });
  }, []);

  const fetchMenus = async () => {
    try {
      const res = await fetch("http://localhost:5000/api/getMenu");
      const menus = await res.json();
      console.log(menus);
      return menus;
    } catch (error) {
      console.error("Error fetching menus:", error);
      return [];
    }
  };

  const { title } = searchParams;

  return (
    <div>
      {loading && (
        <div className="flex items-center justify-center h-screen">
          <div>Loading....</div>
        </div>
      )} 
      {!loading &&
        menuItems
          .filter((menuItem) => menuItem.type === title)
          .map((menuItem, index) => (
            <div key={`${menuItem.type}-${index}`}>
              <div className="overflow-hidden mx-auto max-w-full md:max-w-screen-sm">
                <Image src={menuItem.url} alt={`${title} menu`} width={500} height={300} />
              </div>
            </div>
          ))}
    </div>
  );
}

export default Page;
