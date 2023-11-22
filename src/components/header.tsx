import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Button } from "./ui/button";

export default function Header() {
  return (
    <header className="top-0 z-50 px-[15px] sm:px-[30px] xl:px-[50px] py-5 xl:py-[30px]">
      <nav className="flex justify-between">
        <Link href="/">
          <Image
            src="/assets/images/logo.svg"
            width="140"
            height="39"
            alt="logo"
            className="w-[135px] h-[35px] xl:w-[140px] xl:h-10"
          />
        </Link>

        <div className="flex justify-between gap-[15px] xl:gap-[58px]">
          <div className="hidden xl:flex gap-10 items-center">
            <Link
              href=""
              className="text-white 2xl:text-lg hover:text-primary-blue focus:text-primary-blue font-bold"
            >
              Creon Pass
            </Link>
            <div className="flex items-center">
              <Link
                href=""
                className="text-white 2xl:text-lg pointer-events-none focus:outline-none font-bold"
              >
                Token
              </Link>
              <span
                className="bg-primary-black rounded-full px-1 pt-[2px] pb-[1px] ml-1 mb-5 text-primary-purple text-[10px] font-bold"
                aria-hidden
              >
                SOON
              </span>
            </div>
            <div className="flex items-center">
              <Link
                href=""
                className="text-white 2xl:text-lg pointer-events-none focus:outline-none font-bold"
              >
                AI Revenue
              </Link>
              <span
                className="bg-primary-black rounded-full px-1 pt-[2px] pb-[1px] ml-1 mb-5 text-primary-purple text-[10px] font-bold"
                aria-hidden
              >
                SOON
              </span>
            </div>
            <div className="flex items-center">
              <Link
                href=""
                className="text-white 2xl:text-lg pointer-events-none focus:outline-none font-bold"
              >
                AI Launchpad
              </Link>
              <span
                className="bg-primary-black rounded-full px-1 pt-[2px] pb-[1px] ml-1 mb-5 text-primary-purple text-[10px] font-bold"
                aria-hidden
              >
                SOON
              </span>
            </div>
          </div>

          <Button
            variant="secondary"
            size="sm"
            className="w-[110px] h-[38px] xl:w-[132px] xl:h-[44px] z-20 [&>span]:p-1 lg:[&>span]:p-[6px]"
          >
            Connect
          </Button>

          {/* Sidebar */}
          <div className="flex xl:hidden">
            <input
              type="checkbox"
              id="toggle"
              className="relative sr-only peer"
            />
            <span className="w-[38px] z-20 bg-white rounded-lg" />
            <label
              htmlFor="toggle"
              className="header-toggle w-5 h-[2px] bg-primary-black absolute cursor-pointer my-[17px] mx-2 z-20 peer-checked:fixed peer-checked:bg-primary-blue"
            />
            <label
              htmlFor="toggle"
              className="z-5 backdrop-blur-sm overflow-y-hidden peer-checked:top-0 peer-checked:right-0 
              peer-checked:w-screen peer-checked:h-screen bg-[#0d131cb3] peer-checked:fixed"
            />

            <div
              className="z-10 fixed top-0 right-0 w-[208px] h-screen transition-all duration-500 transform translate-x-full 
              bg-primary-black shadow-lg peer-checked:translate-x-0"
            >
              <div className="flex flex-col pl-[30px] mt-28">
                <Link
                  href=""
                  className="text-white 2xl:text-lg hover:text-primary-blue focus:text-primary-blue border-y border-primary-grey py-[15px] font-bold"
                >
                  Creon Pass
                </Link>
                <div className="flex border-b border-b-primary-grey pt-[15px]">
                  <Link
                    href=""
                    className="text-white 2xl:text-lg pointer-events-none focus:outline-none font-bold"
                  >
                    Token
                  </Link>
                  <span
                    className="bg-primary-black rounded-full px-1 pt-[2px] pb-[1px] ml-1 mb-5 text-primary-purple text-[10px] font-bold"
                    aria-hidden
                  >
                    SOON
                  </span>
                </div>
                <div className="flex border-b border-b-primary-grey pt-[15px]">
                  <Link
                    href=""
                    className="text-white 2xl:text-lg pointer-events-none focus:outline-none font-bold"
                  >
                    AI Income
                  </Link>
                  <span
                    className="bg-primary-black rounded-full px-1 pt-[2px] pb-[1px] ml-1 mb-5 text-primary-purple text-[10px] font-bold"
                    aria-hidden
                  >
                    SOON
                  </span>
                </div>
                <div className="flex border-b border-b-primary-grey pt-[15px]">
                  <Link
                    href=""
                    className="text-white 2xl:text-lg pointer-events-none focus:outline-none font-bold"
                  >
                    AI Launchpad
                  </Link>
                  <span
                    className="bg-primary-black rounded-full px-1 pt-[2px] pb-[1px] ml-1 mb-5 text-primary-purple text-[10px] font-bold"
                    aria-hidden
                  >
                    SOON
                  </span>
                </div>

                <div className="absolute bottom-[30px] flex gap-[10px]">
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
              </div>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}
