"use client";
import { AnimatedText } from "@/components/AnimatedText";
import OneArtSection, { OneArtSectionProps } from "@/components/oneArtSection";
import Section from "@/components/section";
import { FirstFourArt } from "@/config/firstFourArt";
import {
  motion,
  useAnimation,
  useInView,
  useScroll,
  useTransform,
} from "framer-motion";
import Image from "next/image";
import { useEffect, useRef } from "react";

export default function Home() {
  const { scrollYProgress: bar } = useScroll();

  const containerRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end end"],
  });

  const leftOneValue = useTransform(scrollYProgress, [0, 1], ["-100%", "20%"]);

  const RightOneValue = useTransform(scrollYProgress, [0, 1], ["100%", "-20%"]);

  return (
    <main>
      <motion.div
        className={`!fixed top-0 w-screen h-1 bg-fall z-50`}
        style={{
          scaleX: bar,
          transformOrigin: "left",
        }}
      ></motion.div>
      <Section className="!sticky top-0 z-0 grid grid-cols-3 gap-8 p-8 h-full">
        <motion.div className="relative h-full flex flex-col justify-end gap-4">
          <motion.h1
            className="text-7xl font-semibold text-detail"
            initial={{ y: 500, opacity: 0, scale: 1 }}
            whileHover={{ scale: 1.03 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ ease: "easeOut", duration: 0.4 }}
          >
            My Little Gallery
          </motion.h1>
          <motion.div
            className="relative h-3/5"
            initial={{ y: 500, opacity: 0, scale: 1 }}
            whileHover={{ scale: 1.03 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ ease: "easeOut", duration: 0.4 }}
          >
            <Image
              src={
                "https://res.cloudinary.com/ddfqedsqq/image/upload/v1718312521/girl.png"
              }
              alt="girl"
              fill
            />
          </motion.div>
        </motion.div>
        <motion.div className="relative h-full flex flex-col justify-center">
          <motion.div
            className="relative h-[90%]"
            initial={{ y: 1000, opacity: 0, scale: 1 }}
            whileHover={{ scale: 1.03 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ ease: "easeOut", duration: 0.8 }}
          >
            <Image
              src={
                "https://res.cloudinary.com/ddfqedsqq/image/upload/v1718312521/wedding.png"
              }
              alt="wedding"
              fill
            />{" "}
          </motion.div>
        </motion.div>
        <motion.div className="relative h-full flex flex-col justify-start gap-4">
          <motion.div
            className="relative h-3/5"
            initial={{ y: 1500, opacity: 0, scale: 1 }}
            whileHover={{ scale: 1.03 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ ease: "easeOut", duration: 1.2 }}
          >
            <Image
              src={
                "https://res.cloudinary.com/ddfqedsqq/image/upload/v1718312521/tiger.png"
              }
              alt="tiger"
              fill
            />{" "}
          </motion.div>
          <motion.h1
            className="text-3xl font-semibold text-end text-detail"
            initial={{ y: 1500, opacity: 0, scale: 1 }}
            whileHover={{ scale: 1.03 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ ease: "easeOut", duration: 1.2 }}
          >
            Furkan İlhan <br />
            The Anyone
          </motion.h1>
          <Image
            src={
              "https://res.cloudinary.com/ddfqedsqq/image/upload/v1718312521/white_logo.png"
            }
            alt="logo"
            width={120}
            height={20}
            className="absolute -bottom-4 right-0"
          />
        </motion.div>
      </Section>
      {FirstFourArt.map((art: OneArtSectionProps, index: number) => (
        <OneArtSection props={art} key={index} />
      ))}
      <Section
        className="flex flex-col gap-10 mb-10 justify-center items-center shadow-3xl"
        ref={containerRef}
      >
        <motion.h1
          className="absolute top-10 text-[140px] tracking-wide text-potato text-center"
          initial={{ opacity: 0, scale: 0.2, rotate: 90 }}
          whileInView={{ opacity: 0.15, scale: 1 }}
          transition={{ ease: "easeOut", duration: 1.2 }}
        >
          {">"}
        </motion.h1>
        <motion.h1
          className="absolute bottom-20 text-[140px] tracking-wide text-potato text-center"
          initial={{ opacity: 0, scale: 0.2 }}
          whileInView={{ opacity: 0.15, scale: 1 }}
          transition={{ ease: "easeOut", duration: 1.2 }}
        >
          Just Keep Scrolling
        </motion.h1>
        <motion.p
          style={{ translateX: leftOneValue }}
          className="text-slate-100 font-thin text-4xl w-1/2 mx-auto drop-shadow-[0px_0px_5px_rgba(189,161,108)]"
        >
          Do you like these paintings?
        </motion.p>
        <motion.p
          style={{ translateX: RightOneValue }}
          className="text-slate-100 font-thin text-4xl w-1/2 mx-auto drop-shadow-[0px_0px_5px_rgba(189,161,108)]"
        >
          So lets keep exploring, even Mona Lisa wants to see the next
          painting!
        </motion.p>
      </Section>
      <Section className="sticky top-0 flex flex-row shadow-3xl after:cotent[''] after:absolute after:w-full after:h-full after:bg-[url('/pattern.png')] after:-z-0">
        <div className="relative flex flex-col items-center z-10  w-[50%] h-full">
          <div className="flex flex-col justify-center items-center h-1/3">
            <motion.h1
              className={`text-4xl !font-extrabold mb-2 text-fall`}
              initial={{ y: 500, opacity: 0, scale: 1 }}
              whileHover={{ scale: 1.1 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ ease: "easeOut", duration: 0.4 }}
              viewport={{ once: true }}
            >
              The Fall of the Damned
            </motion.h1>
            <motion.h1
              className={`text-4xl !font-extrabold mb-2 text-rubens`}
              initial={{ y: 500, opacity: 0, scale: 1 }}
              whileHover={{ scale: 1.1 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ ease: "easeOut", duration: 0.4 }}
              viewport={{ once: true }}
            >
              Peter Paul Rubens
            </motion.h1>
          </div>

          <AnimatedText
            text={
              "The Fall of the Damned, alternately known as The Fall of the Rebel Angels, is a monumental religious painting by Peter Paul Rubens dated around 1620. It depicts a jumble of the bodies of the damned, hurled into the abyss by archangel Michael and accompanying angels. The sketch of The Fall of the Damned was made in black and red chalks, with a grey wash and is kept in the British Museum. It is assumed to be the work of a studio assistant, which Rubens then went over with a brush and oil colour. The dramatic chiaroscuro of the human forms and clouds emphasizes the darkness into which these figures fall, far from the heavenly light above."
            }
          />
        </div>
        <div className="relative flex justify-center items-center z-10 w-[50%] h-full after:content-[''] after:bg-black after:w-full after:h-screen after:opacity-40">
          <Image
            src={
              "https://res.cloudinary.com/ddfqedsqq/image/upload/v1718312521/fall.jpg"
            }
            alt="fall"
            fill
            objectFit="contain"
          />
        </div>
      </Section>
      <Section className="sticky top-0 flex flex-row shadow-3xl after:cotent[''] after:absolute after:w-full after:h-full after:bg-[url('/pattern.png')] after:-z-0">
        <div className="relative flex justify-center items-center z-10 w-[65%] h-full after:content-[''] after:bg-black after:w-full after:h-screen after:opacity-40">
          <Image
            src={
              "https://res.cloudinary.com/ddfqedsqq/image/upload/v1718312521/bellegin.jpg"
            }
            alt="fall"
            fill
            objectFit="contain"
          />
        </div>
        <div className="relative flex flex-col items-center z-10 w-[35%] h-full">
          <div className="flex flex-col justify-center items-center h-1/3">
            <motion.h1
              className={`text-4xl !font-extrabold mb-2 text-persistence`}
              initial={{ y: 500, opacity: 0, scale: 1 }}
              whileHover={{ scale: 1.1 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ ease: "easeOut", duration: 0.4 }}
              viewport={{ once: true }}
            >
              Persistence <span className="text-daliof">of</span> Memory
            </motion.h1>
            <motion.h1
              className={`text-4xl !font-extrabold mb-2 text-rubens`}
              initial={{ y: 500, opacity: 0, scale: 1 }}
              whileHover={{ scale: 1.1 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ ease: "easeOut", duration: 0.4 }}
              viewport={{ once: true }}
            >
              Peter Paul Rubens
            </motion.h1>
          </div>

          <AnimatedText
            text={
              "The Persistence of Memory (Spanish: La persistencia de la memoria) is a 1931 painting by artist Salvador Dalí and one of the most recognizable works of Surrealism. First shown at the Julien Levy Gallery in 1932, since 1934 the painting has been in the collection of the Museum of Modern Art (MoMA) in New York City, which received it from an anonymous donor. It is widely recognized and frequently referred to in popular culture, and sometimes referred to by more descriptive titles, such as 'Melting Clocks', 'The Soft Watches' or 'The Melting Watches'."
            }
          />
        </div>
      </Section>
    </main>
  );
}
