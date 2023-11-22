import Image from "next/image";
import React from "react";

const data = [
  {
    title: "AI Prospects, Market Size, and Development Pace",
    imageUrl: "/assets/images/AI.svg",
    description:
      "The AI market is one of the most dynamically growing areas of technology. According to reports, the global AI market is expected to reach $190.61 billion by 2025, with a CAGR (Compound Annual Growth Rate) of 36.6%. The key drivers behind this growth include advancements in machine learning, increasing demand for big data analytics, and growing adoption of AI technology across various sectors such as healthcare, finance, and transportation.",
  },
  {
    title: "AI Tools and Market",
    imageUrl: "/assets/images/tools.svg",
    description:
      "AI tools refer to the technologies and software that enable computer systems to perform tasks usually requiring human intellect. The market for these tools is dynamic and diverse, encompassing areas such as Natural Language Processing (NLP), machine learning, computer vision, and robotics. With a wide range of applications, AI tools are becoming increasingly indispensable in many sectors, from healthcare to finance, retail, manufacturing, and many others.",
  },
  {
    title: "AI, Crypto, and NFT Market",
    imageUrl: "/assets/images/crypto.svg",
    description:
      "Artificial Intelligence and blockchain technology are two groundbreaking areas leading new technological innovations. The combination of these two technologies creates intriguing possibilities. For instance, Non-Fungible Tokens (NFTs) can leverage AI to create unique digital artworks or to provide exclusive AI-based services. Meanwhile, cryptocurrencies can benefit from AI by improving security mechanisms, transaction efficiency, and service personalization. Such combination brings substantial benefits for both developers and users, paving the way for unprecedented possibilities.",
  },
];

export default function AIScreen() {
  return (
    <section
      className="px-[15px] md:px-[30px] 2xl:px-60 xl:space-y-5 space-y-[10px] space-x-4 md:space-x-0 py-14 xl:py-20 flex
      overflow-x-scroll md:flex-col no-scrollbar snap-mandatory snap-x"
    >
      {data.map((d, i) => (
        <div
          className="w-[292px] md:w-full h-full bg-[#13171d99] rounded-md flex flex-col-reverse md:flex-row md:justify-between 
          gap-[25px] xl:gap-10 overflow-hidden relative snap-center scroll-smooth flex-shrink-0 first:mt-[10px] md:first:mt-0"
          key={i}
        >
          <div className="md:py-5 xl:py-[30px] pl-5 xl:pl-[30px] space-y-2 xl:space-y-[15px] mb-5 xl:mb-10 md:w-2/3 xl:w-5/6 h-[450px] md:h-full">
            <h4 className="text-primary-white 3xl:text-[38px] md:text-[28px] text-[22px] leading-[110%] uppercase font-monument">
              {d.title}
            </h4>
            <p className="3xl:text-lg text-primary-white leading-[130%]">
              {d.description}
            </p>
          </div>
          <div className="relative rounded-lg lg:w-1/2 md:w-1/3 justify-end flex">
            <div className="absolute z-10 inset-0 bg-gradient-to-b from-primary-purple to-primary-blue mix-blend-overlay" />
            <Image
              src={d.imageUrl}
              width="453"
              height="302"
              alt="token"
              className="object-cover mix-blend-luminosity"
            />
          </div>
        </div>
      ))}
    </section>
  );
}
