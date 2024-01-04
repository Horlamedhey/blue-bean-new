"use client";
import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import NavBarList from "./NavBarList";

export default function NavBar() {
  const [container, setContainer] = useState<null | HTMLElement>(null);

  useEffect(() => {
    const bodyContainer = document.body;
    setContainer(bodyContainer);
  }, [container]);

  const [isOpen, setIsOpen] = useState(false);
  const navItems = [
    { name: "How to buy", href: "#home" },
    { name: "Tokenomics", href: "#tokenomics" },
    { name: "Roadmap", href: "#roadmap" },
  ];
  return (
    <header className="container mx-auto isolate sm:border-b-2 border-[#46658E]">
      <nav className="mx-auto flex  items-center justify-between  px-1 min-[375px]:px-4 h-20 ">
        <Image
          src="/logo.svg"
          alt="logo"
          width={208}
          height={52}
          className="hidden sm:block"
        />
        <Image
          src="/logo-mobile.svg"
          alt="logo"
          width={61}
          height={58.11}
          className="sm:hidden"
        />
        <button
          className="lg:hidden"
          onClick={() => setIsOpen(true)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="#FFF"
            className="w-6 h-6"
          >
            <title>menu</title>
            <path d="M3,6H21V8H3V6M3,11H21V13H3V11M3,16H21V18H3V16Z" />
          </svg>
        </button>
        <NavBarList
          isOpen={isOpen}
          setIsOpen={setIsOpen}
          classes="hidden lg:flex"
        />
        {container &&
          createPortal(
            <NavBarList
              isOpen={isOpen}
              setIsOpen={setIsOpen}
              classes="flex lg:hidden"
            />,
            container
          )}
      </nav>
    </header>
  );
}
