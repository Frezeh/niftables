import React from "react";
import Image from "next/image";

export default function Profiting() {
  return (
    <section className="px-[15px] md:px-[30px] 2xl:px-60 py-14 xl:py-20 lg:mb-20 xl:mb-0">
      <h3 className="text-primary-white 3xl:text-[68px] 2xl:text-6xl md:text-[44px] text-[32px] leading-[110%] uppercase font-monument">
        Profiting Through
      </h3>
      <div className="flex justify-between">
        <span />
        <p className="gradient-text text-[22px] md:text-[28px] xl:text-[32px] leading-[120%] uppercase font-monument text-right">
          AI Innovation & Decentralization
        </p>
      </div>
      <div className="flex flex-col lg:flex-row justify-between items-center lg:gap-11 xl:gap-[70px] relative lg:mt-10">
        <div className="h-full absolute inset-0 z-10 bg-gradient-to-b from-primary-purple to-primary-blue mix-blend-soft-light" />
        <Image
          src="/assets/images/creone.svg"
          width="947"
          height="485"
          alt="logo"
          className="hidden 3xl:block 3xl:w-[947px] 3xl:h-[485px] mt-[30px] lg:mt-0"
        />
        <video
          autoPlay
          muted
          loop
          playsInline
          className="3xl:hidden lg:w-[636px] lg:h-[393px] xl:w-[747px] xl:h-[385px] mt-[30px] lg:mt-0 object-none rounded-md"
        >
          <source src="/assets/images/profit.mp4" />
        </video>
        <div
          className="space-y-7 lg:border-x border-y lg:border-y-0 border-primary-grey lg:h-[380px] flex flex-col lg:items-center
          xl:justify-center md:mt-[30px] lg:mt-0 lg:px-6 2xl:px-[30px] py-5 lg:py-0 z-10"
        >
          <p className="text-primary-white 3xl:text-[22px] text-lg leading-[130%] font-bold">
            The dynamic community driven business model of the future.
          </p>
          <p className="text-primary-white 3xl:text-lg lg:text-base leading-[130%]">
            At Creon, we blend the power of AI tools with the dynamic crypto and
            NFT markets, utilizing an innovative business model to drive
            profitability. This approach empowers our community, as our NFT and
            token holders directly benefit from the growth and prosperity of the
            Creon network, creating a win-win scenario for both our community
            and for the projects we launch.
          </p>
        </div>
      </div>
    </section>
  );
}
