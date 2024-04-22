import React from 'react';

interface SearchParams {
  title: string;
}

function Page({ searchParams }: { searchParams: SearchParams }) {
  const cardTitle = searchParams.title;
  let pdf = "";
  
  if (cardTitle === "laundry") {
    pdf = "/RockRegencyLaundry.pdf#toolbar=0";
  } else if (cardTitle === "food") {
    pdf = "/RockRegencyFood.pdf#toolbar=0";
  } else if (cardTitle === "spa") {
    pdf = "/RockRegencySpa.pdf#toolbar=0";
  }

  return (
    <div>
      <iframe
        src={pdf}
      />
    </div>
  );
}

export default Page;
