import Image from "next/image";

export interface TokenomicsItemProps {
  readonly classes: string;
  readonly image: string;
  readonly w: number;
  readonly h: number;
  readonly imageClasses: string;
  readonly content: {
    main: { text: string; classes: string };
    sub?: { text: string; classes: string };
    classes?: string;
  };
}
export default function TokenomicsItem({
  classes,
  image,
  w,
  h,
  imageClasses,
  content,
}: TokenomicsItemProps) {
  return (
    <div
      className={`absolute flex justify-center items-center z-[1] ${classes}`}
    >
      <Image
        src={image}
        alt={content.main.text}
        width={w}
        height={h}
        className={imageClasses}
      />
      <div
        className={`isolate text-center whitespace-normal absolute ${content.classes}`}
      >
        <h3 className={content.main.classes}>{content.main.text}</h3>
        {content.sub && (
          <span className={content.sub.classes}>{content.sub.text}</span>
        )}
      </div>
    </div>
  );
}
