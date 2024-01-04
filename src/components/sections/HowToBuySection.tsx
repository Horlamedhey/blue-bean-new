import Image from "next/image";
import HowToBuyHeading from "@/components/headings/HowToBuyHeading";
export default function HowToBuySection() {
  const buyMethods = [
    {
      title: "Create a Wallet",
      content: `<p>Download your <span class="font-bold">preferred wallet</span> either phantom or any other solana supported wallet.</p>`,
      bg: "bg-[#FC6]",
      text: "text-[#FC6]",
      classes: "sm:ml-6",
      buyBean: {
        src: "/buy-bean1.svg",
        w: 90.5,
        h: 95,
        classes: "-top-9 -left-1",
      },
    },
    {
      title: "Use Sol to purchase $BEANZ",
      content: `<p>You can <span class="font-bold">Purchase sol</span> On your <span class="font-bold">wallet</span> direct with your banking card, or you can buy in exchange and send to your new wallet address.</p>`,
      bg: "bg-[#FF6D66]",
      text: "text-[#FF6D66]",
      classes: "sm:ml-6 sm:mt-4",
      buyBean: {
        src: "/buy-bean2.svg",
        w: 77,
        h: 95.5,
        classes: "right-1 -top-4 z-[1]",
      },
    },
    {
      title: "Go to RaYdium",
      content: `<p><a href="#">SPace for link</a> From your <span class="font-bold">mobile wallet browser</span> or via <span class="font-bold">google chrome on pc</span>. Connect your wallet to the site and sign the wallet signature.</p>`,
      bg: "bg-[#9FB3FF]",
      text: "text-[#9FB3FF]",
      buyBean: {
        src: "/buy-bean3.svg",
        w: 79,
        h: 101,
        classes: "right-8 -top-6 z-[1]",
      },
    },
    {
      title: "Swap SOL for <br/>$BEANZ",
      content: "<p>Switch Sol to $BEANZ, and fatten the bean.</p>",
      bg: "bg-[#65CAFD]",
      text: "text-[#65CAFD]",
      classes: "sm:mt-4",
      buyBean: {
        src: "/buy-bean4.svg",
        w: 86,
        h: 97,
        classes: "right-10 -top-7 z-[1]",
      },
    },
  ];
  return (
    <section
      id="howToBuy"
      className="sm:bg-[url('/gradient-light.webp')] bg-no-repeat bg-cover bg-center py-16"
    >
      <div className="container mx-auto sm:px-5 px-2 xl:px-0">
        <div className="inline-block relative sm:pb-[17.3px] sm:pr-[17.3px] pb-[10px] pr-[10px]">
          <div className="border-4 border-black bg-[#F0F0F0] rounded-[31px] sm:py-9 py-5 sm:px-14 px-3 relative z-[1]">
            <p className="text-[#373E67] font-medium sm:text-xl">
              BlueBean is a decentralized social Experiment on{" "}
              <span className="font-bold text-[#59B7E9]">Solana Ecosystem</span>
              {""}, where a Degen community builds and governs an ecosystem ,
              where a Degen community builds and governs an ecosystem focused on
              fighting{" "}
              <span className="font-bold text-[#59B7E9]">global hunger</span>.
              The goal of the BEANZ token is to enable the DAO, acting as the
              currency of the ecosystem, while offering{" "}
              <span className="font-bold text-[#59B7E9]">
                substantial utility
              </span>{" "}
              to <span className="font-bold text-[#59B7E9]">holders</span>.
              BlueBean Ecosystem will launch on{" "}
              <span className="font-bold text-[#59B7E9]">Solana</span> and
              subsequently other{" "}
              <span className="font-bold text-[#59B7E9]">chains</span>.
            </p>
          </div>
          <div className="rounded-[31px] bg-[#3A426C] border-2 border-black absolute inset-0 left-2 top-2" />
          <Image
            src="/orange-bean.svg"
            alt="hero"
            width={104}
            height={127}
            className="absolute right-2 sm:right-7 -bottom-7 z-[2] sm:w-[85px] w-16"
          />
        </div>
        <div className="mt-14">
          <h2 className="flex justify-center">
            <span className="visually-hidden">How to Buy</span>
            <HowToBuyHeading />
          </h2>
          <div className="relative">
            <div className="grid sm:grid-cols-2 sm:grid-rows-2 grid-rows-4 max-w-[800px] justify-center sm:gap-y-6 sm:gap-x-2 gap-8 mx-auto mt-14">
              {buyMethods.map((item) => (
                <div
                  key={item.title}
                  className={`inline-block relative pb-[11.12px] pr-[10.27px] max-w-[365px] h-[250px] ${item.classes}`}
                >
                  <div className="border-4 border-black bg-[#F0F0F0] rounded-[31px] py-6 px-5 relative z-[1] h-full">
                    <h3
                      dangerouslySetInnerHTML={{ __html: item.title }}
                      className={`${item.text} font-spicy text-3xl`}
                    />
                    <div
                      dangerouslySetInnerHTML={{ __html: item.content }}
                      className="font-medium mt-2 text-[#373E67]"
                    />
                  </div>
                  <div
                    className={`rounded-[31px] ${item.bg} border-2 border-black absolute inset-0 left-2 top-2`}
                  />
                  <Image
                    src={item.buyBean.src}
                    alt="hero"
                    width={item.buyBean.w}
                    height={item.buyBean.h}
                    className={`absolute ${item.buyBean.classes}`}
                  />
                </div>
              ))}
            </div>
            <div className="hidden absolute inset-0 lg:flex justify-center items-center">
              <Image
                src="/methods-union.svg"
                alt="hero"
                width={94.811}
                height={218.896}
                className="mt-4 -ml-4"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
