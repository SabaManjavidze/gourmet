"use client";
import * as React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { sampleMenus } from "menu";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { CardBody, CardContainer } from "./3d-card";
import { nanoid } from "nanoid";

export function CateringCarousel() {
  const router = useRouter();
  const handleItemClick = (name: string) => {
    router.push(`/catering?menu=${name}`);
  };
  const autoplay = React.useMemo(() => {
    return Autoplay({ delay: 2000 });
  }, []);
  return (
    <Carousel
      plugins={[autoplay as any]}
      opts={{
        align: "center",
        loop: true,
        active: true,
      }}
      className="w-[90%] px-12 max-sm:w-full"
    >
      <CarouselContent>
        {sampleMenus.concat(sampleMenus).map(({ name, src }, index) => (
          <CarouselItem
            key={nanoid()}
            className="hover:z-20 md:basis-1/2 lg:basis-1/3"
          >
            <CardContainer className="cursor-pointer border-4 border-white hover:z-20 ">
              <CardBody className="relative flex aspect-square items-center justify-center p-6 duration-200 hover:scale-[1.120] ">
                <Image
                  src={src}
                  alt=""
                  onClick={() => handleItemClick(name)}
                  fill
                  className="object-cover"
                  onMouseLeave={() => {
                    if (autoplay) {
                      autoplay?.play?.();
                    }
                  }}
                  onMouseEnter={() => {
                    if (autoplay) {
                      autoplay?.stop?.();
                    }
                  }}
                />
                <span className="absolute bottom-0 z-10 w-full bg-black/25 py-4 text-center text-3xl font-normal uppercase text-white max-md:text-xl max-sm:text-base">
                  {name}
                </span>
              </CardBody>
            </CardContainer>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious
        variant={"outline-white"}
        className="h-12 w-12"
        iconStyle="h-6 w-6"
      />
      <CarouselNext
        variant={"outline-white"}
        className="h-12 w-12"
        iconStyle="h-6 w-6"
      />
    </Carousel>
  );
}
