import Image from "next/image";

export interface RoadmapItemProps {
  readonly classes?: string;
  readonly roadmap: {
    phase: string;
    title: string;
    steps: string[];
    bg: string;
    text: string;
    img?: boolean;
  };
}
export default function RoadmapItem({ roadmap, classes }: RoadmapItemProps) {
  return (
    <div
      className={`${classes} inline-block relative pb-[11.12px] pr-[10.27px] w-[280px]`}
    >
      <div className="border-4 border-black bg-[#F0F0F0] rounded-[31px] p-5 pb-16 relative z-[1]">
        <h3 className=" font-spicy text-3xl leading-8">
          <span className={roadmap.text}>{roadmap.phase}</span> -{" "}
          <span className="whitespace-nowrap">{roadmap.title}</span>
        </h3>
        <div className="font-medium mt-4 text-[#393E66]">
          {roadmap.steps.map((step, i) => (
            <ul key={step}>
              <li className={`inline-flex gap-2 ${i && "mt-2"}`}>
                <div
                  className={`w-[10px] h-[10px] mt-1.5 rounded-full ${roadmap.bg}`}
                />
                <span>{step}</span>
              </li>
            </ul>
          ))}
        </div>
      </div>
      <div
        className={`rounded-[31px] ${roadmap.bg} border-2 border-black absolute inset-0 left-2 top-2`}
      />
      {roadmap.img && (
        <Image
          src="/roadmap-bean.svg"
          alt="bean"
          width={77}
          height={94}
          className="absolute -top-7 -right-5 z-[1]"
        />
      )}
    </div>
  );
}
