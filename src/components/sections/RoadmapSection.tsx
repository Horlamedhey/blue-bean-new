import Image from "next/image";
import RoadmapHeading from "@/components/headings/RoadmapHeading";
import RoadmapItem from "../RoadmapItem";
import RoadmapHeadingMobile from "../headings/RoadmapHeadingMobile";
export default function RoadmapSection() {
  const roadmaps = [
    {
      phase: "(Phase 01)",
      title: "Launch Week",
      steps: [
        "TGE",
        "Marketing",
        "Community Building",
        "2k holders",
        "Marketcap surge marketing",
      ],
      bg: "bg-[#9FB3FF]",
      text: "text-[#9FB3FF]",
      img: true,
    },
    {
      phase: "(Phase 02)",
      title: "Fatten the Bean",
      steps: ["Consolidate", "Channel calls", "Marketing", "5k holders"],
      bg: "bg-[#FFCC66]",
      text: "text-[#FFCC66]",
    },
    {
      phase: "(Phase 03)",
      title: "Listings",
      steps: [
        "Exchange and wallet listings",
        "CMC and coingecko",
        "Keep the BEANZ pumping",
      ],
      bg: "bg-[#9BDFFF]",
      text: "text-[#9BDFFF]",
    },
    {
      phase: "(Phase 04)",
      title: "Hunger Charity",
      steps: ["Community funded hunger charity."],
      bg: "bg-[#393E66]",
      text: "text-[#393E66]",
    },
  ];
  return (
    <section
      id="roadmap"
      className="lg:bg-[url('/gradient-light.webp')] bg-no-repeat bg-cover bg-center py-16"
    >
      <div className="container mx-auto xl:px-20 2xl:px-0">
        <h2 className="flex justify-center">
          <span className="visually-hidden">Blue Bean Roadmap</span>
          <RoadmapHeading />
          <RoadmapHeadingMobile />
        </h2>
        <div className="relative lg:bg-[url('/bean-bg.svg')]">
          <div className="flex flex-col lg:flex-row items-center lg:items-start justify-center pt-14 px-5 xl:px-0 gap-2 lg:gap-0">
            <RoadmapItem
              roadmap={roadmaps[0]}
              classes="lg:self-end lg:mb-32"
            />
            <div className="flex flex-col lg:gap-20 gap-2">
              <RoadmapItem
                roadmap={roadmaps[1]}
                classes="lg:ml-28"
              />
              <RoadmapItem
                roadmap={roadmaps[3]}
                classes="lg:ml-16 hidden lg:inline-block"
              />
            </div>
            <RoadmapItem
              roadmap={roadmaps[2]}
              classes="lg:ml-16 lg:mb-14 lg:self-end"
            />
            <RoadmapItem
              roadmap={roadmaps[3]}
              classes="lg:ml-16 lg:hidden"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
