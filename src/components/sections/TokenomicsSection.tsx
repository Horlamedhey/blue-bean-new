import Image from "next/image";
import TokenomicsItem, { TokenomicsItemProps } from "../TokenomicsItem";
import TokenomicsHeading from "../headings/TokenomicsHeading";
export default function TokenomicsSection() {
  const tokenomicsItems: TokenomicsItemProps[] = [
    {
      classes:
        "sm:top-0 sm:left-10 top-4 left-3 sm:w-[236px] sm:h-[227px] w-[85px] h-[85px]",
      image: "/tokenomics1.svg",
      w: 236,
      h: 227,
      imageClasses: "",
      content: {
        classes: "flex flex-col-reverse",
        main: {
          text: "Transaction Tax",
          classes: "sm:text-3xl text-xs px-2",
        },
        sub: {
          text: "10%",
          classes:
            "sm:text-7xl text-lg font-spicy sm:leading-10 leading-tight sm:mt-6",
        },
      },
    },
    {
      classes:
        "sm:top-10 sm:right-10 top-2 right-2 sm:w-[220px] sm:h-[208px] w-[100px] h-[95px]",
      image: "/tokenomics2.svg",
      w: 220,
      h: 208,
      imageClasses: "",
      content: {
        classes: "flex flex-col-reverse",
        main: {
          text: "Supply Locked",
          classes: "sm:text-3xl text-[13.665px] px-2",
        },
        sub: {
          text: "100%",
          classes: "sm:text-[37.5px] text-[17px] font-spicy leading-tight",
        },
      },
    },
    {
      classes:
        "sm:bottom-10 sm:left-16 left-2 bottom-28 sm:w-[286px] sm:h-[290px] w-[133.83px] h-[128.42px]",
      image: "/tokenomics3.svg",
      w: 286,
      h: 290,
      imageClasses: "",
      content: {
        main: {
          text: "no Team Tokens",
          classes:
            "text-[20.7px] sm:text-[43.5px] font-spicy px-2 leading-tight",
        },
      },
    },
    {
      classes:
        "sm:bottom-0 right-0 bottom-28 sm:w-[323px] sm:h-[331px] w-[127.5px] h-[122px]",
      image: "/tokenomics4.svg",
      w: 323,
      h: 331,
      imageClasses: "sm:w-full",
      content: {
        main: {
          text: "Maximum supply",
          classes: "sm:text-[34px] text-[13.6px] px-4",
        },
        sub: {
          text: "1,000,000,000",
          classes: "sm:text-[42.5px] text-[17px] font-spicy",
        },
      },
    },
  ];
  return (
    <section
      id="tokenomics"
      className="bg-[#393E66] py-7  xl:px-40"
    >
      <div className="container mx-auto bg-[url('/bean-bg.svg')]">
        <div className="pt-7">
          <h2 className="flex justify-center">
            <span className="visually-hidden text-3xl">Tokenomics</span>
            <TokenomicsHeading />
          </h2>
          <div className="relative sm:h-[600px] lg:w-[800px] h-[400px] mx-auto flex justify-center items-center mt-4 sm:mt-0">
            {tokenomicsItems.map((v) => (
              <TokenomicsItem
                key={v.content.main.text}
                classes={v.classes}
                image={v.image}
                w={v.w}
                h={v.h}
                imageClasses={v.imageClasses}
                content={v.content}
              />
            ))}
            <Image
              src="/tokenomics.svg"
              alt="tokenomics"
              width={263}
              height={248}
              className="absolute mb-40 w-[224.7px] h-[211.8px] sm:w-[263px] sm:h-[248px]"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
