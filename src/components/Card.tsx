import { FC } from "react";
import ReactIcon from "../assets/images.png";

interface CardProps {
  title: string;
  link:string
  content: string;
}

const Card: FC<CardProps> = ({ title,link, content }: CardProps) => {
  return (
    <section className="outline outline-1 outline-zinc-300 bg-gray-50 font-inter w-full md:w-[400px] min-h-full flex flex-col rounded-xl p-4 cursor-pointer">
      <a href={link} target="_blank">
        <div className="flex-grow">
          <img src={ReactIcon} alt="" width={25} />
          <p className="font-semibold mt-2 text-[1.2rem]">{title}</p>
          <p className="text-zinc-600 mt-2">{content}</p>
        </div>
      </a>
    </section>
  );
};

export default Card;
