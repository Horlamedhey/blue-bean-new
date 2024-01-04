"use client";
import Link from "next/link";

interface NavBarListProps {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
  classes: string;
}

export default function NavBarList({
  isOpen,
  setIsOpen,
  classes,
}: NavBarListProps) {
  const navItems = [
    { name: "How to buy", href: "#howToBuy" },
    { name: "Tokenomics", href: "#tokenomics" },
    { name: "Roadmap", href: "#roadmap" },
  ];
  return (
    <div
      className={`${classes} ${
        isOpen ? "translate-x-0" : "translate-x-full"
      } transform transition-transform duration-300 lg:duration-0 lg:transform-none flex flex-col lg:relative fixed inset-0 bg-[#3A426C] lg:flex-row items-center justify-center lg:justify-between gap-20 lg:gap-8 text-white lg:text-xl text-[33.8px] font-spicy`}
    >
      <button
        className="lg:hidden absolute top-6 right-6"
        onClick={() => setIsOpen(false)}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="#FFF"
          className="w-6 h-6"
        >
          <title>window-close</title>
          <path d="M13.46,12L19,17.54V19H17.54L12,13.46L6.46,19H5V17.54L10.54,12L5,6.46V5H6.46L12,10.54L17.54,5H19V6.46L13.46,12Z" />
        </svg>
      </button>
      <ul
        className={` flex flex-col lg:relative lg:flex-row items-center justify-center lg:justify-between gap-20 lg:gap-8 text-white lg:text-xl text-[33.8px] font-spicy`}
      >
        {navItems.map((item) => (
          <li key={item.name}>
            <Link
              href={item.href}
              className="hover:text-[#9FB3FF] transition duration-300"
              onClick={() => setIsOpen(false)}
            >
              {item.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
