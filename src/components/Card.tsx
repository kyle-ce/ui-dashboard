import { useRef } from "react";

export interface ICard {
  data: {
    description: string;
    src: string;
    alt: string;
    title: string;
  };
}

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
      className="flex flex-col items-center justify-between w-full p-4 transition-transform duration-300 ease-in-out bg-white rounded-lg shadow-md hover:cursor-pointer hover:scale-105 hover:shadow-lg"
    >
      <h1 className="mb-2 text-lg font-semibold text-center text-gray-800 truncate">
        {title}
      </h1>
      <img
        src={src}
        alt={alt}
        className="object-cover w-24 h-24 mb-4 border-2 border-teal-500 rounded-full"
      />
      <p className="text-sm text-center text-gray-600 line-clamp-3">
        {description}
      </p>
    </div>
  );
};

export default Card;
