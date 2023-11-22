import Image from "next/image";
import React from "react";

export default function Footer() {
  return (
    <footer className="relative flex flex-col md:flex-row justify-center md:justify-between items-center pb-[35px] pt-6 px-[30px] 2xl:px-60">
      <div className="flex flex-col  md:flex-row items-center justify-center md:gap-[77px] xl:gap-[90px]">
        <span className="hidden md:block text-white text-sm xl:text-base not-italic font-normal leading-[130%]">
          © Creon 2023. All rights reserved.
        </span>
        <div className="flex gap-[10px]">
          <a
            className="w-[34px] h-[34px] border-2 rounded-full flex justify-center items-center hover:bg-primary-blue hover:border-transparent transition-all"
            href=""
          >
            <Image
              src="/assets/icons/message.svg"
              width="16"
              height="16"
              alt="logo"
            />
          </a>
          <a
            className="w-[34px] h-[34px] border-2 rounded-full flex justify-center items-center hover:bg-primary-blue hover:border-transparent transition-all"
            href=""
          >
            <Image
              src="/assets/icons/discord.svg"
              width="16"
              height="16"
              alt="logo"
            />
          </a>
          <a
            className="w-[34px] h-[34px] border-2 rounded-full flex justify-center items-center hover:bg-primary-blue hover:border-transparent transition-all"
            href=""
          >
            <Image
              src="/assets/icons/twitter.svg"
              width="16"
              height="16"
              alt="logo"
            />
          </a>
        </div>
        <span className="md:hidden pt-7 pb-[15px] text-white text-sm xl:text-base not-italic font-normal leading-[130%]">
          © Creon 2023. All rights reserved.
        </span>
      </div>
      <a
        href=""
        className="flex gap-[6px] items-center text-primary-white text-sm xl:text-base [&>svg>path]:hover:fill-primary-blue transition-all leading-[130%]"
      >
        Powered by
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="101"
          height="18"
          viewBox="0 0 101 18"
          fill="none"
        >
          <path
            d="M11.2222 14.1177H8.71237L2.4233 5.70415V14.1177H0V2.11768H2.55312L8.79892 10.4973V2.11768H11.2222V14.1177Z"
            fill="white"
          ></path>
          <path
            d="M16.8333 14.1177H14.5889V2.11768H16.8333V14.1177Z"
            fill="white"
          ></path>
          <path
            d="M30.3002 4.27641H22.9223V7.33587H29.8672V9.47749H22.9223V14.1177H20.2002V2.11768H30.3002V4.27641Z"
            fill="white"
          ></path>
          <path
            d="M42.6441 4.31029H38.4659V14.1177H35.6162V4.31029H31.4219V2.11768H42.6441V4.31029Z"
            fill="white"
          ></path>
          <path
            d="M53.8671 14.1177H50.8128L49.8872 11.857H44.3031L43.3775 14.1177H40.4004L45.6605 2.11768H48.6068L53.8671 14.1177ZM49.0079 9.73244L47.1106 5.04127L45.1823 9.73244H49.0079Z"
            fill="white"
          ></path>
          <path
            d="M54.9893 2.11768H62.0108C62.4196 2.11768 62.7568 2.12914 63.0226 2.15173C63.2883 2.17432 63.6307 2.26501 64.0498 2.42363C64.4688 2.57095 64.801 2.79767 65.0463 3.10361C65.4551 3.61352 65.6595 4.26495 65.6595 5.05822C65.6595 6.32734 65.0616 7.17725 63.8659 7.60776C65.4194 8.0044 66.2012 9.01292 66.2115 10.6332C66.2115 11.4718 66.053 12.146 65.7362 12.6559C65.5317 12.9959 65.2967 13.2734 65.0309 13.4887C64.7755 13.7041 64.4739 13.8571 64.1264 13.9476C63.7892 14.027 63.5132 14.078 63.2986 14.1006C63.0839 14.112 62.7926 14.1177 62.4247 14.1177H54.9893V2.11768ZM57.6721 6.82596H61.7501C62.6189 6.82596 63.0532 6.38398 63.0532 5.50019C63.0431 4.62769 62.6137 4.19137 61.7655 4.19137H57.6721V6.82596ZM57.6721 12.0099H61.9035C62.9767 12.0099 63.5132 11.4661 63.5132 10.3782C63.5132 9.40375 63.0328 8.91659 62.0721 8.91659H57.6721V12.0099Z"
            fill="white"
          ></path>
          <path
            d="M76.3116 14.1177H68.4561V2.11768H70.8997V11.908H76.3116V14.1177Z"
            fill="white"
          ></path>
          <path
            d="M88.6558 14.1177H77.4336V2.11768H88.3247V4.27641H80.3633V6.97893H88.0599V9.12055H80.3633V11.9761H88.6558V14.1177Z"
            fill="white"
          ></path>
          <path
            d="M89.7773 10.9337L92.1768 10.2777C92.6934 11.4509 93.8807 12.0377 95.7386 12.0377C95.9474 12.0377 96.161 12.0269 96.3796 12.0057C96.598 11.9736 96.8763 11.915 97.2141 11.8296C97.552 11.7444 97.8251 11.5949 98.0338 11.3817C98.2524 11.1576 98.3617 10.8804 98.3617 10.5497C98.3617 10.4004 98.3368 10.267 98.2871 10.1496C98.2474 10.0324 98.1629 9.93104 98.0338 9.84568C97.9146 9.76031 97.8002 9.69104 97.691 9.63772C97.5916 9.58441 97.4327 9.53094 97.2141 9.47763C96.9955 9.42431 96.8166 9.38694 96.6776 9.36568C96.5485 9.33363 96.3397 9.29641 96.0516 9.25373C95.217 9.11504 94.6358 9.01904 94.308 8.96573C93.9801 8.90163 93.6175 8.81641 93.2199 8.70963C92.8226 8.60299 92.4898 8.48041 92.2215 8.34173C91.1186 7.78699 90.5672 6.89094 90.5672 5.65372C90.5672 4.85367 90.8007 4.18167 91.2677 3.63772C91.7346 3.08299 92.3259 2.69367 93.0412 2.46962C93.7565 2.23494 94.5712 2.11768 95.4853 2.11768C98.2176 2.11768 100.056 3.01904 101 4.82162L98.5107 5.49363C98.0635 4.58694 97.0302 4.13368 95.4108 4.13368C93.8807 4.13368 93.1157 4.57099 93.1157 5.44562C93.1157 5.90436 93.3939 6.22972 93.9503 6.42172C94.1887 6.49631 95.3164 6.72568 97.3334 7.10968C97.7009 7.18441 98.004 7.24836 98.2424 7.30167C98.4809 7.35499 98.7839 7.46162 99.1515 7.62172C99.5291 7.78167 99.8272 7.96836 100.046 8.18162C100.264 8.39504 100.458 8.68836 100.627 9.06173C100.796 9.42431 100.88 9.84568 100.88 10.3257C100.88 12.8537 99.0969 14.1177 95.53 14.1177C94.0397 14.1177 92.8374 13.8564 91.9233 13.3337C91.0193 12.811 90.3039 12.011 89.7773 10.9337Z"
            fill="white"
          ></path>
        </svg>
      </a>
      <div className="absolute w-full left-0 bottom-0 opacity-40 md:opacity-[0.15]">
        <div className="w-full h-full relative">
          <div className="absolute inset-0 bg-gradient-to-b from-primary-purple to-primary-blue mix-blend-soft-light" />

          <video className="w-full h-full object-cover" autoPlay loop muted>
            <source src="/assets/images/footer.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-gradient-to-b from-primary-black to-[#00000000] from-0% to-100%" />
          <div className="absolute inset-0 bg-gradient-to-b from-primary-black to-[#00000000] from-0% to-100%" />
        </div>
      </div>
    </footer>
  );
}
