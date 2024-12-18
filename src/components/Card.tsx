import { useRef } from "react";
import { ICard } from "../data/types";

const Card = ({ data }: ICard) => {
  const { description, title, alt, src } = data;
  const cardRef = useRef<HTMLDivElement>(null);

  const clickHandler = () => {
    console.log("Card: ", cardRef.current);
  };

  return (
    <div
      onClick={clickHandler}
      tabIndex={0}
      role="button"
      ref={cardRef}
      className="flex flex-col items-center justify-between w-full p-4 transition-transform duration-300 ease-in-out rounded-lg shadow-md bg-onSurface hover:cursor-pointer hover:scale-105 hover:shadow-lg dark:bg-darkSurface dark:text-darkText"
    >
      <h1 className="mb-2 text-lg font-semibold text-center truncate ">
        {title}
      </h1>
      <img
        src={src}
        alt={alt}
        className="object-cover w-24 h-24 mb-4 border-2 rounded-full border-primary"
      />
      <p className="text-sm text-center line-clamp-3">{description}</p>
    </div>
  );
};

export default Card;
