import React from 'react';
import Image from 'next/image';

interface SearchParams {
  title: string;
}

function Page({ searchParams }: { searchParams: SearchParams }) {
  const cardTitle = searchParams.title;
  let laundry = false;
  let food = false;
  let spa = false;

  
  if (cardTitle === "laundry") {
    laundry = true;
} else if (cardTitle === "food") {
    food = true;
    
  } else if (cardTitle === "spa") {
    spa = true;
    
  }


  return (
    <div>
    {laundry && (
        <div className="overflow-hidden mx-auto max-w-full md:max-w-screen-sm">
        <img src='/assets/laundry/RockRegencyLaundry.png' className="w-full h-auto" alt="Rock Regency Laundry"></img>
        <Image src={"https://utfs.io/f/18be80bd-7756-4400-8c6f-cc94cec07922-m6a75c.jpeg"} alt='Laundry menu' width="500" height="300"/>
      </div>
    )}
    {food && (
        <div className="overflow-hidden mx-auto max-w-full md:max-w-screen-sm">
        <img src='/assets/RockRegencyFood.png' className="w-full h-auto" alt="Rock Regency Food"></img>
      </div>
    )}
    {spa && (
        <div className="overflow-hidden mx-auto max-w-full md:max-w-screen-sm">
        <img src='/assets/spa/RockRegencySpa1.png' className="w-full h-auto" alt="Rock Regency Laundry"></img>
        <img src='/assets/spa/RockRegencySpa2.png' className="w-full h-auto" alt="Rock Regency Laundry"></img>

      </div>
    )}


</div>

  );
}

export default Page;
