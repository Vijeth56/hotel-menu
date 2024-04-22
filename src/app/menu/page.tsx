import React from 'react';

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
        <img src='/assets/RockRegencyLaundry.png' className="w-full h-auto" alt="Rock Regency Laundry"></img>
      </div>
    )}
    {food && (
        <div className="overflow-hidden mx-auto max-w-full md:max-w-screen-sm">
        <img src='/assets/RockRegencyFood.png' className="w-full h-auto" alt="Rock Regency Food"></img>
      </div>
    )}
    {spa && (
        <div className="overflow-hidden mx-auto max-w-full md:max-w-screen-sm">
        <img src='/assets/RockRegencySpa1.png' className="w-full h-auto" alt="Rock Regency Laundry"></img>
        <img src='/assets/RockRegencySpa2.png' className="w-full h-auto" alt="Rock Regency Laundry"></img>

      </div>
    )}


</div>

  );
}

export default Page;
