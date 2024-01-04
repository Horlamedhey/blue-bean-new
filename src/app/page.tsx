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
      <footer className="bg-[url('/footer-bg.svg')] bg-fill bg-center relative sm:text-xl text-lg text-[#F0F0F0] flex items-center justify-center">
        <div className="container mx-auto flex flex-col items-center gap-6 pb-2 pt-8 text-center">
          <Image
            src="/logo.svg"
            width="208"
            height="52"
            alt="logo"
          />
          <div className="flex gap-6">
            <Link
              href="https://t.me/+4jVYbWVFwjE2ZTBk"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Join us on Telegram"
            >
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[#1877F2]">
                <Image
                  src="/telegram.svg"
                  width="24"
                  height="20"
                  alt="telegram"
                />
              </span>
            </Link>

            <Link
              href="https://twitter.com/bluebeantoken?t=VsGcighc8a-TetXH7sciKA&s=09"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Follow us on Twitter"
            >
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[#000]">
                <Image
                  src="/twitter.svg"
                  width="25"
                  height="20"
                  alt="twitter"
                />
              </span>
            </Link>
          </div>
          <span className="z-[1]">
            ©{" "}
            <span className="font-spicy">
              Copy right 2023 all rights reserved{" "}
            </span>
          </span>
        </div>
      </footer>
    </>
  );
}
