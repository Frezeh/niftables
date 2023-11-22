import React from "react";
import { Button } from "./ui/button";

const items = [
  "Pre-launch investment opportunities for upcoming AI projects",
  "Free and early access to Creon built AI projects",
  "Higher allocation limits on the Creon AI Launchpad",
  "Revenue share distribution from Creon built AI projects",
];

export default function CreonPass() {
  return (
    <section className="px-[15px] md:px-[30px] 2xl:px-60 lg:grid grid-cols-2 gap-10 relative py-14 xl:py-20">
      <div className="flex flex-col justify-center">
        <h2 className="text-primary-white 3xl:text-[68px] xl:text-6xl md:text-[44px] text-[32px] leading-[110%] uppercase font-monument">
          creon pass nft
        </h2>
        <div className="my-5 xl:my-[30px] h-[1px] bg-primary-grey flex-shrink-0" />
        <p className="gradient-text text-lg 3xl:text-[22px] font-bold font-satoshi leading-[130%]">
          The Creon NFT pass unlocks access to AI projects, the Creon launchpad,
          and a ticket to generate passive income through AI-driven tools
        </p>

        <div className="hidden lg:block">
          <div className="space-y-[10px] py-10">
            {items.map((s, i) => (
              <div
                className="xl:px-[18px] xl:pt-3 xl:pb-4 border border-primary-grey inline-flex rounded-md"
                key={i}
              >
                <p className="font-satoshi text-primary-white 3xl:text-[22px]">
                  {s}
                </p>
              </div>
            ))}
          </div>

          <Button
            variant="primary"
            size="lg"
            className="w-full h-[46px] md:w-[231px] xl:w-[453px] xl:h-[54px]"
          >
            Buy Creon Pass
          </Button>
        </div>
      </div>

      <div className="flex flex-col justify-between md:flex-row-reverse">
        <div className="relative flex flex-col justify-center items-center mt-[25px] md:mt-0 md:h-[694px] md:w-2/3 lg:w-full flex-shrink-0">
          <div className="absolute inset-0 z-10 bg-gradient-to-t from-[#3d8bff70] to-primary-purple mix-blend-soft-light" />
          <video autoPlay muted loop playsInline>
            <source src="/assets/images/video-1.mp4" />
          </video>

          <div className="w-full h-full absolute inset-0 z-10 bg-[url('/assets/images/dark-shape.svg')]" />
        </div>

        <div className="lg:hidden">
          <div className="space-y-[10px] py-[30px]">
            <div className="px-4 pt-[10px] pb-4 border border-primary-grey inline-flex rounded-md">
              <p className="font-satoshi text-primary-white 3xl:text-[22px]">
                Prospect to derive financial benefits through the redistributed
                profit generated from AI tools, but only when the majority of
                NFT holders decide to release the tool publicly.
              </p>
            </div>
            <div className="flex md:flex-col gap-[15px]">
              <div className="px-4 pt-[10px] pb-4 border border-primary-grey inline-flex rounded-md">
                <p className="font-satoshi text-primary-white 3xl:text-[22px]">
                  The possibility of allocating investments into new,
                  exceptional tokenized AI tools through Creon Launchpad.
                </p>
              </div>
              <div className="px-4 pt-[10px] pb-4 border border-primary-grey inline-flex rounded-md">
                <p className="font-satoshi text-primary-white 3xl:text-[22px]">
                  Early access to allocations in inspiring tokenized projects,
                  real businesses based on AI.
                </p>
              </div>
            </div>
          </div>

          <Button
            variant="primary"
            size="sm"
            className="w-full h-[46px] md:w-[231px] xl:w-[453px] xl:h-[54px]"
          >
            Buy Creon Pass
          </Button>
        </div>
      </div>
    </section>
  );
}
