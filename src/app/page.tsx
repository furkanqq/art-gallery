"use client";
import { AnimatedText } from "@/components/AnimatedText";
import OneArtSection, { OneArtSectionProps } from "@/components/oneArtSection";
import Section from "@/components/section";
import { Cursor } from "@/components/shared/cursor";
import { FirstFourArt } from "@/config/firstFourArt";
import { LayoutGallery } from "@/config/layoutGallery";
import {
  AnimatePresence,
  motion,
  useScroll,
  useTransform,
} from "framer-motion";
import Image from "next/image";
import { useRef, useState } from "react";

export default function Home() {
  const { scrollYProgress: bar } = useScroll();

  const containerRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end end"],
  });

  const leftOneValue = useTransform(scrollYProgress, [0, 1], ["-100%", "20%"]);

  const RightOneValue = useTransform(scrollYProgress, [0, 1], ["100%", "-20%"]);

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [magnetActive, setMagnetActive] = useState(false);

  const [selectedId, setSelectedId] = useState<any>(null);

  const text = "Gallery";

  const defaultAnimation = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
    },
  };

  return (
    <main>
      <motion.div
        className={`!fixed top-0 w-screen h-1 bg-fall z-50`}
        style={{
          scaleX: bar,
          transformOrigin: "left",
        }}
      ></motion.div>
      <Cursor hideCursor={magnetActive} />
      <header className="absolute inset-x-0 top-0 flex items-center justify-between px-[5%] py-4 lg:py-12 z-[999]">
        {isMenuOpen ? (
          <>
            <Image
              src={
                "https://res.cloudinary.com/ddfqedsqq/image/upload/v1718312521/white_logo.png"
              }
              alt="logo"
              width={160}
              height={40}
              className="absolute object-contain left-28"
            />
            <div></div>
          </>
        ) : (
          <div></div>
        )}

        <button
          className={`relative w-14 h-14 bg-zinc-800/30 hover:bg-zinc-800/80 rounded-full flex flex-col items-center transition-all duration-300 justify-center ${
            !isMenuOpen ? "gap-y-1" : ""
          }`}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          onPointerEnter={() => setMagnetActive(true)}
          onPointerLeave={() => setMagnetActive(false)}
        >
          <span
            className={`h-[2px] transition-all duration-300 bg-zinc-300 z-[10] ${
              !isMenuOpen ? "w-7" : "w-6 mb-[-1px] rotate-45"
            }`}
          ></span>
          <span
            className={`h-[2px] transition-all duration-300 bg-zinc-300 z-[10] ${
              !isMenuOpen ? "w-7" : "w-6 mt-[-1px] -rotate-45"
            }`}
          ></span>
          {magnetActive ? (
            <motion.div
              layoutId="cursor"
              className="absolute inset-0 bg-orange-500 rounded-full"
            ></motion.div>
          ) : null}
        </button>
        <motion.nav
          transition={{
            type: "spring",
            damping: 100,
            stiffness: 500,
          }}
          initial={{
            y: "-100%",
          }}
          animate={{
            y: !isMenuOpen ? "-100%" : "0%",
          }}
          className="fixed inset-0 bg-zinc-900/80 backdrop-blur z-[-1]"
        >
          <div className="flex h-full">
            <div className="flex px-[5%] flex-col justify-center h-full gap-4 ">
              <a
                className="text-5xl hover:text-potato cursor-pointer active:scale-[0.97]"
                href="https://www.linkedin.com/in/furkan-ilhan/"
                target="_blank"
              >
                Linkedin
              </a>
              <a
                className="text-5xl hover:text-potato cursor-pointer active:scale-[0.97]"
                href="https://www.instagram.com/llhanfurkan/"
                target="_blank"
              >
                Instagram
              </a>
              <a
                className="text-5xl hover:text-potato cursor-pointer active:scale-[0.97]"
                href="https://x.com/1Furkanilhan"
                target="_blank"
              >
                Twitter
              </a>
              <a
                className="text-5xl hover:text-potato cursor-pointer active:scale-[0.97]"
                href="https://www.furkanilhan.com/"
                target="_blank"
              >
                Portfolio
              </a>
            </div>
            <div className="flex border-l-2 border-stone-700 px-[5%] w-full items-center text-3xl">
              Hello! I am Furkan İlhan. Web developer with 2 years experience
              living in Istanbul and working with Balance Network.
            </div>
          </div>
        </motion.nav>
      </header>
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
        </motion.div>
      </Section>
      {FirstFourArt.map((art: OneArtSectionProps, index: number) => (
        <OneArtSection props={art} index={index} key={index} />
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
          So lets keep exploring, even Mona Lisa wants to see the next painting!
        </motion.p>
      </Section>
      <Section className="sticky top-0 flex flex-row shadow-3xl after:cotent[''] after:absolute after:w-full after:h-full after:bg-[url('/pattern.png')] after:-z-0">
        <div className="relative flex flex-col items-center z-10  w-[50%] h-full">
          <div className="flex flex-col justify-center items-center h-1/3">
            <motion.h1
              className={`text-4xl !font-extrabold mb-2 text-fall`}
              initial={{ scale: 1 }}
              whileHover={{ scale: 1.1 }}
              transition={{ ease: "easeOut", duration: 0.4 }}
            >
              The Fall of the Damned
            </motion.h1>
            <motion.h1
              className={`text-4xl !font-extrabold mb-2 text-rubens`}
              initial={{ scale: 1 }}
              whileHover={{ scale: 1.1 }}
              transition={{ ease: "easeOut", duration: 0.4 }}
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
      <Section className="sticky top-0 flex flex-row shadow-3xl after:cotent[''] after:absolute after:w-full after:h-full after:bg-[url('/pattern.png')] after:-z-0 mb-[72px]">
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
              initial={{ scale: 1 }}
              whileHover={{ scale: 1.1 }}
              transition={{ ease: "easeOut", duration: 0.4 }}
            >
              Persistence <span className="text-daliof">of</span> Memory
            </motion.h1>
            <motion.h1
              className={`text-4xl !font-extrabold mb-2 text-rubens`}
              initial={{ scale: 1 }}
              whileHover={{ scale: 1.1 }}
              transition={{ ease: "easeOut", duration: 0.4 }}
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

      <Section className="flex justify-center items-center !h-[200vh]">
        <div className="absolute h-[72px] w-full top-[-72px] bg-black flex justify-center items-center pt-8">
          <motion.span
            initial="hidden"
            whileInView="visible"
            transition={{
              staggerChildren: 0.2,
            }}
            aria-hidden
          >
            {text.split("").map((letter, index) => (
              <motion.span
                variants={defaultAnimation}
                key={index}
                className="text-6xl text-white"
              >
                {letter}
              </motion.span>
            ))}
          </motion.span>
        </div>
        <div className="grid grid-flow-row-dense grid-cols-3 grid-rows-4 gap-20 h-full w-full p-24">
          {LayoutGallery.map((art, index) => (
            <motion.div
              key={index}
              layoutId={index.toString()}
              onClick={() => setSelectedId(index)}
              className={`relative h-[300px] rounded-lg overflow-hidden cursor-zoom-in ${
                index === 0 || index === 3 || index === 4 || index === 7
                  ? "col-span-2"
                  : ""
              }`}
            >
              <Image
                src={art.image}
                alt={art.name}
                fill
                objectFit="cover"
                objectPosition={index === 0 || index === 5 ? "top" : "center"}
                className="brightness-[0.65]"
              />
            </motion.div>
          ))}

          <AnimatePresence>
            {selectedId !== null && (
              <motion.div
                layoutId={selectedId.toString()}
                className="fixed top-0 left-0 w-full h-full flex justify-center items-center z-50 cursor-zoom-out"
              >
                <motion.div
                  className="relative h-[100vh] w-[100vw] bg-[rgba(0,0,0,0.40)] backdrop-blur-lg overflow-hidden"
                  onClick={() => setSelectedId(null)}
                >
                  <Image
                    src={LayoutGallery[selectedId].image}
                    alt={LayoutGallery[selectedId].name}
                    fill
                    objectFit={"contain"}
                    className="brightness-75"
                    objectPosition={
                      selectedId === 5 || selectedId === 6 ? "top" : "center"
                    }
                  />
                  <motion.h4 className="text-black absolute top-10 left-20 text-2xl bg-potato p-4 rounded-md">
                    {LayoutGallery[selectedId].name} by{" "}
                    {LayoutGallery[selectedId].artist}
                  </motion.h4>
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </Section>
    </main>
  );
}
