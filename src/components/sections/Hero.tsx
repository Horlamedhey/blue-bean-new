"use client";
import Image from "next/image";
import { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import BlueBean from "../headings/BlueBean";
import Link from "next/link";

export default function Hero() {
  const [container, setContainer] = useState<null | HTMLElement>(null);

  useEffect(() => {
    const headerContainer = document.getElementById("header-container");
    setContainer(headerContainer);
  }, [container]);

  return (
    <>
      {container &&
        createPortal(
          <div
            id="home"
            className="isolate px-4 pb-10 lg:pb-0 flex flex-col-reverse sm:flex-row items-center text-center sm:text-left container mx-auto overflow-hidden xl:px-0"
          >
            <div>
              <h1 className="flex justify-center sm:block">
                <span className="visually-hidden">Blue Bean</span>
                <BlueBean />
              </h1>
              <p className="text-2xl font-medium text-[#F0F0F0] mt-7 mb-8">
                The bean hopped on the blockchain train, aiming to grow into a
                big, juicy <span className="font-bold">Bitbean!</span>
              </p>
              <Link href="">
                <button className="relative pb-[5px] pr-[5px]">
                  <div className="text-xl font-spicy rounded-lg bg-[#F0F0F0] border-2 border-black px-5 py-2 z-[1] relative">
                    Buy BEANZ
                  </div>
                  <div className="rounded-lg bg-[#59B7E9] border-2 border-black absolute inset-0 left-1 top-1" />
                </button>
              </Link>
            </div>
            <div className="w-full">
              <Image
                src="/hero.png"
                alt="hero"
                width={696}
                height={681}
                className="hidden sm:block w-full"
              />
              <Image
                src="/hero-mobile.png"
                alt="hero"
                width={696}
                height={562}
                className="sm:hidden w-full"
              />
            </div>
          </div>,
          container
        )}
    </>
  );
}
