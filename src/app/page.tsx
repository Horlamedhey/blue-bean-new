import NavBar from "@/components/NavBar";
import Hero from "@/components/sections/Hero";
import HowToBuySection from "@/components/sections/HowToBuySection";
import RoadmapSection from "@/components/sections/RoadmapSection";
import TokenomicsSection from "@/components/sections/TokenomicsSection";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <div
        id="header-container"
        className="relative overflow-hidden"
      >
        <Image
          src="/bg1.svg"
          alt=""
          width={1345}
          height={173}
          className="w-full h-full absolute object-cover"
        />

        <NavBar />
      </div>

      <main className="isolate">
        <Hero />
        <HowToBuySection />
        <TokenomicsSection />
        <RoadmapSection />
      </main>
      <footer className="bg-[url('/footer-bg.svg')] bg-cover bg-no-repeat bg-center relative text-xl text-[#F0F0F0] h-20 flex items-center justify-center">
        {/* <Image
          src="/footer-bg.svg"
          alt=""
          width={1280}
          height={78}
          className="w-full absolute h-full"
        /> */}
        <span className="z-[1]">
          ©
          <span className="font-spicy">
            Copy right 2023 all rights reserved{" "}
          </span>
        </span>
      </footer>
    </>
  );
}
