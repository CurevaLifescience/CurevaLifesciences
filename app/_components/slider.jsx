"use client";
import * as React from "react";
import Autoplay from "embla-carousel-autoplay";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";

function Slider() {
  const imgUrl = ["/slider11.jpg", "/slider22.jpg", "/slider33.jpg"];
  const plugin = React.useRef(
    Autoplay({ delay: 3000, stopOnInteraction: true })
  );

  return (
    <Carousel
      plugins={[plugin.current]}
      onMouseEnter={plugin.current.stop}
      onMouseLeave={plugin.current.reset}
      className={'overflow-x-hidden z-30'}
    >
      <CarouselContent>
        {imgUrl.map((url, index) => (
          <CarouselItem key={index}>
            <Image
              src={url}
              alt="slider"
              width={1000}
              height={400}
              className="w-full h-[200px] md:h-[500px] object-cover rounded-2xl"
            />
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
}

export default Slider;
