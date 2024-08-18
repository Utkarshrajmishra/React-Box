import { FC } from "react";
import ReactIcon from "../assets/images.png";

interface CardProps {
  title: string;
  content: string;
}

const Card: FC<CardProps> = ({ title, content }: CardProps) => {
  return (
    <section className="outline outline-1 outline-zinc-300 bg-zinc-50 font-inter w-[350px] md:w-[350px]  height-fit rounded-xl  px-4 py-6 cursor-pointer">
      <div className="">
        <div className="w-fit">
          <img src={ReactIcon} alt="" width={35} />
          <p className="font-semibold mt-2 text-[1.2rem]">{title}</p>
          <p className="text-zinc-600 mt-2">{content}</p>
        </div>
        <p></p>
      </div>
    </section>
  );
};

export default Card;
