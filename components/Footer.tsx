import { Social_Icons } from "@/constant";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Footer: React.FC<{}> = () => {
  const now = new Date();
  const currentDate = now.toLocaleString("en-CY", {
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "numeric",
    minute: "numeric",
    second: "numeric",
    hour12: false,
  });

  const specificDate = new Date("2024-03-04T21:03:11");
  const formattedSpecificDate = specificDate.toLocaleString("en-UZ", {
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "numeric",
    minute: "numeric",
    second: "numeric",
    hour12: false,
  });

  const difference = now.getTime() - specificDate.getTime();

  const days = Math.floor(difference / (1000 * 60 * 60 * 24));
  const hours = Math.floor(
    (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  
  return (
    <div className=" container mx-auto 2xl pt-[50px] pb-8 ">
      <div className="pb-10 justify-center flex ">
        {Social_Icons.map((social) => {
          return (
            <Link
              href={social.link}
              rel="noopener noreferrer"
              target="_blank"
              key={social.alt}
              className="z-[1]"
            >
              <Image
                src={social.image}
                height={30}
                width={30}
                className="mx-5"
                alt={social.alt}
              />
            </Link>
          );
        })}
      </div>
      <p className=" tracking-[0.5em] text-center text-transparent font-light pb-5  bg-clip-text bg-gradient-to-r from-yellow-700 to-orange-500  text-1xl ">
          It all started on {formattedSpecificDate}
        </p>
        <p className=" tracking-[0.5em] text-center text-transparent font-light pb-5  bg-clip-text bg-gradient-to-r from-yellow-700 to-orange-500  text-1xl ">
          {days} days and {hours} hours spent on that ⌨
        </p>
        
        <p className=" tracking-[0.5em] text-center text-transparent font-light pb-5  bg-clip-text bg-gradient-to-r from-red-700 to-orange-500  text-1xl "></p>
          <p className="text-gray-300 text-center text-sm">
        powered by Zhalolov Mukhriddin ☕ built with ReactTS provided with ❤️
      </p>
    </div>
  );
};

export default Footer;