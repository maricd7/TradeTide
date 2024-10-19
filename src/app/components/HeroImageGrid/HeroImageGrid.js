import Image from "next/image";
import React from "react";

const HeroImageGrid = () => {
  return (
    <div className="flex flex-col gap-8 w-full">
      <Image
        className="rounded-lg"
        width={532}
        height={500}
        alt="MainTradeTide"
        src="https://plus.unsplash.com/premium_photo-1663931932651-ea743c9a0144?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      />
      <div className="flex gap-8">
        <Image
          className="rounded-lg"
          width={250}
          height={500}
          alt="MainTradeTide"
          src="https://plus.unsplash.com/premium_photo-1661764256397-af154e87b1b3?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        />
        <Image
          className="rounded-lg"
          width={250}
          height={500}
          alt="MainTradeTide"
          src="https://plus.unsplash.com/premium_photo-1661301087289-a9067c2f933f?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        />
      </div>
    </div>
  );
};

export default HeroImageGrid;
