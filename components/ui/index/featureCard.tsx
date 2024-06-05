"use client";
import Image from "next/image";
import React from "react";

interface cardInfo {
  image: string;
  title: string;
  text: string;
  direction: boolean;
}

interface props {
  card: cardInfo[];
}

const FeatureCard: React.FC<props> = ({ card }) => {
  return (
    <>
      <div className="mt-8">
        {card.map((cardItem, index) => (
          <div
            key={index}
            className={`w-full h-full flex items-center justify-between flex-col text-center ${cardItem.direction ? "md:flex-row-reverse " : "md:flex-row "}`}
          >
            <Image src={cardItem.image} alt={cardItem.title} width={300} height={300} />

            {index % 2 === 0 ? (
              <div className="text-left w-1/2">
                <h3 className="font-semibold text-2xl">{cardItem.title}</h3>
                <p>{cardItem.text}</p>
              </div>
            ) : (
              <div className="text-right w-1/2">
                <h3 className="font-semibold text-2xl">{cardItem.title}</h3>
                <p>{cardItem.text}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </>
  );
};

export default FeatureCard;
