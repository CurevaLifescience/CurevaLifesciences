import Image from "next/image";
import React from "react";

function ButterflyImage() {
  return (
    <div className="relative grid grid-cols-2  w-full gap-4 md:gap-x-6 md:gap-y-6 h-full ">
      {/* Image 1 - Top Left */}
      <div className="relative flex items-end justify-end ">
        <div className="md:w-[280px] md:h-[230px] w-[200px] h-[160px] overflow-hidden rounded-tr-[55px] rounded-br-[55px] rounded-bl-[55px] bg-white shadow-lg">
          <Image
            src="/about.jpg"
            alt="Medical team discussion"
            width={400}
            height={280}
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      {/* Image 2 - Top Right */}
      <div className="relative flex items-end justify-start ">
        <div className="md:w-[380px] md:h-[280px] w-[200px] h-[200px] overflow-hidden rounded-tl-[55px] rounded-br-[55px] rounded-bl-[55px] bg-white shadow-lg">
          <Image
            src="/about.jpg"
            alt="Female medical professional"
            width={300}
            height={320}
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      {/* Image 3 - Bottom Left */}
      <div className="relative flex justify-end items-start">
        <div className="md:w-[240px] md:h-[210px] w-[170px] h-[150px] overflow-hidden rounded-tl-[55px] rounded-tr-[55px] rounded-br-[55px] bg-white shadow-lg">
          <Image
            src="/about.jpg"
            alt="Doctor examining child with mother"
            width={340}
            height={240}
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      {/* Experience Box - Bottom Right */}
      <div className="relative flex justify-start items-start">
        <div className="md:w-[230px] md:h-[240px] w-[170px] h-[190px] overflow-hidden rounded-tl-[55px] rounded-tr-[55px] rounded-bl-[55px] bg-white shadow-lg">
          <Image
            src="/about.jpg"
            alt="Doctor examining child with mother"
            width={340}
            height={240}
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      {/* Center Diamond */}
      <div className="absolute md:top-86 top-52 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-12 h-12  bg-orange-500 rotate-45 shadow-md z-10 rounded-xl"></div>
    </div>
  );
}

export default ButterflyImage;
