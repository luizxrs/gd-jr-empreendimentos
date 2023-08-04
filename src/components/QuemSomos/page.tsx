"use client";

import Image from "next/image";
import { useRef, useEffect, useState } from "react";
import { motion } from "framer-motion";
import members from "@/app/quemsomos/members";
import TextSlideBar from "./TextSlideBar";
import FounderCard from "./FounderCard";
import founderCards from "@/app/quemsomos/founders";
import OutlineTitle from "./OutlineTitle";
import ImageStack from "./ImageStack";
import AnimatedText from "./AnimatedText";


export default function QuemSomosPage() {
  const [dragLeftConstraint, setDragLeftConstraint] = useState(0);
  const carousel = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (carousel.current) {
      setDragLeftConstraint(
        (carousel.current.scrollWidth - carousel.current.offsetWidth) * -1
      );
    }
  }, []);

  return (
    <>
      <div className="flex flex-col justify-center items-center w-screen bg-backgroundColor-100">
        <section className="max-w-screen-2xl h-screen pb-24 relative">
          {/* FIRST */}
          <div className=" max-w-screen-xl m-auto h-full ">
            <div className="flex flex-col gap-2 mx-auto my-12 justify-center items-center h-full w-[90%] md:w-full">
              <h1 className="text-4xl md:text-6xl lg:text-8xl font-bold pointer-events-none text-center z-20 w-full">
                CONSTRUÍMOS <br /> HÁ 16 ANOS O{" "}
                <span className="text-Primary-100">FUTURO</span> <br /> DA SUA
                FAMÍLIA
              </h1>
              <OutlineTitle>
                SOBRE
                <br />
                NÓS
              </OutlineTitle>
            </div>
          </div>
          <div className="w-full left-1/2 -translate-x-1/2 absolute top-0 bottom-0 grid grid-cols-1 sm:grid-cols-2  md:grid-cols-3 gap-12 opacity-10 overflow-hidden">
            <ImageStack order={0} directionUp={false} />
            <ImageStack order={0} directionUp={true} />
            <ImageStack order={1} directionUp={false} />
          </div>
        </section>

        <section className="w-screen mb-24">
          <div className=" max-w-screen-2xl">
            <div className="w-full overflow-hidden">
              <TextSlideBar direction={"left"} />
              <TextSlideBar direction={"right"} />
            </div>
            <div className="w-full h-[1100px] md:h-[900px] pt-48 px-4 md:px-12 relative">
              <div className="w-full h-full grid grid-cols-1 md:grid-cols-2 gap-x-24 px-12 relative">
                <OutlineTitle>FOUNDERS</OutlineTitle>
                <div className="absolute top-10 bottom-0 right-0 left-0 bg-Primary-300"></div>
                {founderCards.map((founder) => (
                  <FounderCard
                    founderInfo={founder.founderInfo}
                    key={founder.founderInfo.name}
                  />
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="max-w-screen-2xl p-24">
          <div className=" w-full">
            <div className="w-full overflow-hidden">
              <div className="flex flex-col gap-2 my-12 justify-center items-center h-full">
                <h2 className="text-4xl md:text-7xl  font-bold pointer-events-none text-center z-20">
                  MANIFESTO
                </h2>
                <AnimatedText
                  text="CONSTRUINDO UM FUTURO MELHOR COM INOVAÇÃO, QUALIDADE E COM NOSSOS CLIENTES E O MEIO AMBIENTE."
                />
              </div>
              <div className="w-full pt-48 mb-24 relative">
                <div className="w-[90vw] h-full">
                  <OutlineTitle>EQUIPE</OutlineTitle>
                  <motion.div
                    ref={carousel}
                    className="h-full w-full overflow-hidden cursor-grab mx-auto"
                  >
                    <motion.div
                      drag="x"
                      dragConstraints={{ right: 0, left: dragLeftConstraint }}
                      className="h-full max-w-full grid grid-flow-col gap-x-4 md:gap-x-20 px-6 relative"
                    >
                      {/* //CARROUESEL */}
                      {members.map((member) => {
                        return (
                          <>
                            <motion.div className="w-[60vw] h-[90vw] md:w-[25vw] md:h-[40vw] relative group">
                              <motion.div className="absolute inset-0 bottom-10 bg-zinc-900/30 z-10 group-hover:opacity-0 transition-opacity duration-700"></motion.div>
                              <motion.div className="absolute top-0 bottom-10 right-0 left-0">
                                <motion.div className="absolute top-0 bottom-0 right-0 left-0 overflow-hidden">
                                  <Image
                                    src={member.image}
                                    alt="Gustavo Fundador da empresa"
                                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                                  />
                                </motion.div>
                                <motion.div className="w-[80%] h-10 bg-Primary-300 absolute left-1/2 -translate-x-1/2 -bottom-5 z-20 flex justify-center items-center text-center tracking-wide text-[.75rem] md:text-base">
                                  {member.title}
                                </motion.div>
                              </motion.div>
                            </motion.div>
                          </>
                        );
                      })}
                    </motion.div>
                  </motion.div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
