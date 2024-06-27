import { motion } from "framer-motion";
import React from "react";
import Section from "../section";
import Image from "next/image";
import { cn } from "@/utils/cn";

export interface OneArtSectionProps {
  image: string;
  title: string;
  description: string;
  name: string;
  artist: string;
  nameColor: string;
  artistColor: string;
  descriptionColor: string;
  descriptionTextColor: string;
}

const OneArtSection = ({
  props,
  index,
}: {
  props: OneArtSectionProps;
  index: number;
}) => {
  console.log(props.descriptionColor, "props.descriptionColor");
  return (
    <Section className="!sticky top-0 z-0 shadow-3xl" index={index} key={index}>
      <motion.div className="overflow-hidden after:absolute after:content-[''] after:bg-black after:w-full after:h-screen after:opacity-40">
        <Image src={props.image} alt={props.title} fill objectFit="cover" />
      </motion.div>
      <motion.div className="flex flex-col items-end absolute top-[20%] z-0 w-[42%]">
        <motion.h1
          className={`text-4xl !font-extrabold mb-2 !text-${props.nameColor}`}
          initial={{ y: 500, opacity: 0, scale: 1 }}
          whileHover={{ scale: 1.1 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ ease: "easeOut", duration: 0.4 }}
          viewport={{ once: true }}
        >
          {props.name}
        </motion.h1>
        <motion.p
          className={`text-${props.artistColor} text-xl`}
          initial={{ y: 500, opacity: 0, scale: 1 }}
          whileHover={{ scale: 1.1 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ ease: "easeOut", duration: 0.4 }}
          viewport={{ once: true }}
        >
          {props.artist}
        </motion.p>
      </motion.div>
      <motion.div
        drag={"x"}
        dragConstraints={{ left: 0, right: 600 }}
        dragTransition={{ bounceStiffness: 400, bounceDamping: 15 }}
        className={`absolute items-center w-screen h-screen left-[-99.5vw] cursor-pointer after:content-['']  after:w-[28px] after:h-[28px] after:absolute after:right-[-12px] after:rotate-[45deg] after:top-[50%] after:-translate-y-1/2 after:z-10 before:content-['Pull'] before:text-dirty_white before:opacity-50  before:w-fit  before:h-[28px] before:absolute before:right-[-50px] before:top-[50.3%] before:-translate-y-1/2 before:z-10 after:bg-[rgba(0,0,0,0.5)] bg-[rgba(0,0,0,0.5)] backdrop-blur-lg`}
      >
        <div
          className={`absolute right-0 w-[600px] px-12 py-20 text-${props.descriptionTextColor} h-full overflow-scroll`}
        >
          <h1 className="text-2xl font-extrabold mb-6">{props.title}</h1>
          <p>{props.description}</p>
        </div>
      </motion.div>
    </Section>
  );
};

export default OneArtSection;
