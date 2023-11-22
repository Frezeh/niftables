import Footer from "@/components/footer";
import AIScreen from "@/components/ai-screen";
import CreonPass from "@/components/creon-pass";
import Profiting from "@/components/profiting";
import ComingSoon from "@/components/coming-soon";
import OurMission from "@/components/our-mission";

export default function Home() {
  return (
    <div>
      {/* Hero section */}
      <section className="px-[15px] md:px-[30px] xl:px-60 h-screen w-full">
        <div
          className="w-full h-full absolute inset-0 z-10 bg-gradient-to-b from-primary-purple via-primary-blue 
          to-primary-black mix-blend-soft-light"
        />

        <div className="flex flex-col justify-center px-[15px]">
          <video
            autoPlay
            muted
            loop
            playsInline
            className="w-full h-screen absolute min-w-full min-h-full right-0 bottom-0 object-cover"
          >
            <source src="/assets/images/video.mp4" />
          </video>
          <div className="absolute bottom-20 ml-[-15px] ">
            <h1 className="hidden xl:block text-primary-white 3xl:text-[68px] text-6xl leading-[110%] uppercase font-monument">
              The world's first <br /> platform for Tokenizing <br /> AI
              blockchain projects
            </h1>
            <h1 className="xl:hidden text-primary-white text-[32px] md:text-[44px] md:w-1/2 lg:w-full leading-[110%] uppercase font-monument mr-1">
              Empowering AI-Crypto <br /> Innovations and Integrating <br /> AI
              Tools into crypto.
            </h1>
            <div className="inline-flex flex-col xl:mt-10 justify-center items-center border-y border-y-transparent mr-4">
              <div className="w-full bg-gradient-to-r from-primary-blue to-primary-purple h-[1px]" />
              <p className="hidden xl:block gradient-text pt-[7px] pb-3 3xl:text-[22px] text-lg font-bold font-satoshi">
                Hold the Creon Pass NFT and earn passive income from AI Tools
              </p>
              <p className="xl:hidden gradient-text pt-[7px] pb-3 text-sm font-bold font-satoshi">
                Creon «Create On» confidential AI Tools for granting access
                through NFTs.
              </p>
              <div className="w-full bg-gradient-to-r from-primary-blue to-primary-purple h-[1px]" />
            </div>
          </div>
        </div>
      </section>

      <OurMission />
      <Profiting />
      <AIScreen />
      <CreonPass />
      <ComingSoon />
      <Footer />
    </div>
  );
}
