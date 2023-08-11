"use client";

import Header from "@/components/Header/Header";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <>
      <Header />
      <motion.div className="h-screen w-screen overflow-hidden bg-backgroundColor-100 flex flex-col justify-center items-center selection:bg-Primary-100 selection:text-white">
        <motion.div className="m-auto text-center uppercase flex my-12 w-full justify-center items-center relative">
          <motion.h1
            variants={{
              hidden: {
                letterSpacing: "1rem",
              },
              visible: {
                letterSpacing: "1.75rem",
              },
            }}
            initial="hidden"
            animate="visible"
            transition={{
              ease: [0.26, 0.96, 0.74, 1.00],
              duration: 4,
            }}
            className="text-3xl md:text-7xl font-bold pointer-events-none z-20 inline-block"
          >
            PÁGINA
            <br />
            <motion.span className="text-Primary-100">NÃO</motion.span> <br />
            ENCONTRADA
          </motion.h1>
          <motion.h1 className="text-6xl md:text-[10rem] font-bold pointer-events-none absolute font-outline-1 text-transparent">
            PÁGINA <br />
            NÃO <br /> ENCONTRADA
          </motion.h1>
        </motion.div>
        <motion.button className="text-sm md:text-base font-semibold bg-transparent border-2 border-white rounded-full py-2 px-6 hover:tracking-widest hover:scale-105 hover:bg-Primary-300 hover:text-white transition-all duration-700">
          Voltar ao início
        </motion.button>
      </motion.div>
    </>
  );
}
