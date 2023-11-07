"use client";

import { useRef } from "react";
import { projects } from "@/lib/data";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import Tag from "./tags";


type ProjectProps = (typeof projects)[number];

export default function Project({
  name,
  description,
  language,
  link,
  imageURL,
}: ProjectProps) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1", "1.33 1"],
  });
  const scaleProgess = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
  const opacityProgess = useTransform(scrollYProgress, [0, 1], [0.6, 1]);

  return (
    <motion.div
      ref={ref}
      style={{
        scale: scaleProgess,
        opacity: opacityProgess,
      }}
      className="group mb-3 sm:mb-8 last:mb-0 w-full flex flex-col"
    >
      <section className="w-full border border-dred rounded-lg overflow-hidden sm:pr-8 relative hover:bg-gray-200 transition sm:group-even:pl-8 dark:text-white dark:bg-white/10 dark:hover:bg-white/20">
        <div className="pt-4 pb-7 px-5 sm:pl-10 sm:pr-2 sm:pt-10 sm:max-w-[60%] flex flex-col h-full sm:group-even:ml-[18rem]">
          <div className="flex flex-row" >
                <h3 className="text-2xl font-semibold ">{name}</h3>
                <button className='align-middle ml-3'title="View source code" >
                            <a href={link} target="_blank">
                            <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 320 512" fill="#580C0C">
                                <path d="M310.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L242.7 256 73.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z"/>
                            </svg>
                            </a>
                </button>
          </div>
          <p className="mt-2 leading-relaxed text-gray-700 dark:text-white/70">
            {description}
          </p>
          <ul className="mt-2 whitespace-nowrap">
            {language.map((tag, index) => (
              <Tag key={index} language={tag}/>
            ))}
          </ul>
        </div>
        {imageURL ?
        <Image
          src={imageURL}
          alt="Project I worked on"
          className="absolute hidden sm:block top-8 -right-40 w-[28.25rem] rounded-t-lg shadow
        transition 
        group-hover:scale-[1.04]
        group-hover:-translate-x-3
        group-hover:translate-y-3
        group-hover:-rotate-2

        group-even:group-hover:translate-x-3
        group-even:group-hover:translate-y-3
        group-even:group-hover:rotate-2

        group-even:right-[initial] group-even:-left-40"
        /> :<></>}
      </section>
    </motion.div>
  );
}