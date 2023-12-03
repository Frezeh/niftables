import Image from "next/image";
import React from "react";

const data = [
  {
    title: "Token",
    subtitle: "The Gateway token to the world of AI",
    imageUrl: "/assets/images/token.svg",
    description:
      "Set to debut in the latter half of 2024, the CREON token serves as the  pioneering link between cutting-edge AI initiatives and blockchain technology. This innovative token provides NFT and token holders with unparalleled access to our Launchpad, AI tools, and exclusive pre-launch investment prospects.",
  },
  {
    title: "Revenue",
    subtitle: "Driving income and growth through decentralization",
    imageUrl: "/assets/images/revenue.svg",
    description:
      "CREON NFT and token holders are integral participants in the profit-sharing from our launched AI-based enterprises. We support the development of AI tools, ensuring a steady revenue stream, all while allowing early investors to enjoy the benefits of their support.",
  },
  {
    title: "Launchpad",
    subtitle: "Driving the future of AI Innovation",
    imageUrl: "/assets/images/launchpad.svg",
    description:
      "The Creon AI Launchpad, an essential component of our initiative, represents a groundbreaking opportunity in the realm of AI and blockchain. It provides the first known platform for acquiring allocations in tokenized AI projects, offering our community of NFT and CREON token holders early access to innovative and promising AI endeavors.",
  },
];

export default function ComingSoon() {
  return (
    <section
      className="px-[15px] md:px-[30px] 2xl:px-52 3xl:px-60 lg:grid grid-cols-3 py-14 gap-5 xl:gap-10 flex 
      overflow-x-scroll no-scrollbar snap-mandatory snap-x"
    >
      {data.map((d, i) => (
        <div
          className="w-[292px] md:w-[308px] lg:w-full bg-[#13171d99] pb-6 xl:pb-[34px] rounded-md pt-5 xl:pt-[30px] 
          relative snap-center scroll-smooth flex-shrink-0 before:content-['COMING_SOON'] before:flex before:absolute 
          before:text-primary-black before:text-center before:text-xs before:font-bold before:leading-[110%] before:px-[6px] 
          before:py-1 before:rounded-full before:right-5 before:top-0 before:bg-primary-white before:mt-[-10px]"
          key={i}
        >
          <div className="px-5 xl:px-[30px] space-y-2 mb-5">
            <h4 className="text-primary-white 2xl:text-[38px] md:text-[28px] text-[22px] leading-[110%] uppercase font-monument">
              {d.title}
            </h4>
            <p className="gradient-text text-lg 3xl:text-[22px] leading-[130%] font-bold h-[46px] xl:h-[58px]">
              {d.subtitle}
            </p>
          </div>
          <div className="relative pr-5 cursor-pointer pb-[18px] xl:pb-7 rounded-lg">
            <div
              className="border-y-[3px] border-r-[3px] border-primary-black rounded-tr-lg rounded-br-lg overflow-hidden 
            relative [&>img]:hover:scale-110 [&>img]:transition-all [&>img]:duration-1000 [&>img]:ease-out"
            >
              <div className="absolute z-10 inset-0 bg-gradient-to-b from-primary-purple to-primary-blue mix-blend-color" />
              <Image
                src={d.imageUrl}
                width="423"
                height="234"
                alt="token"
                className="w-full"
              />
            </div>
          </div>
          <p className="3xl:text-lg text-primary-white leading-[130%] px-5 xl:px-[30px]">
            {d.description}
          </p>
        </div>
      ))}
    </section>
  );
}
