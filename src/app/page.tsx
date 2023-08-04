"use client";

import Header from "@/components/Header/Header";
import BeachResidenceLogo from "@/assets/svg/beach-residence-logo.svg";
import FooterLeftElement from "@/assets/svg/footer-left-element.svg";
import FooterRightElement from "@/assets/svg/footer-right-element.svg";
import Image from "next/image";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <>
      <Header />
      <div className=" flex flex-col justify-center items-center w-screen h-screen">
        <div className="relative gap-4 flex flex-col justify-between items-center selection:bg-Primary-300">
          <div className="w-44 h-36 ">
            <Image
              src={BeachResidenceLogo}
              alt="Logo da Beach Residence"
              className=""
            />
          </div>
          <h1 className="w-[90vw] text-xl md:text-5xl max-w-2xl font-extralight text-center leading-[1.2] ">
            VIVA O{" "}
            <span className="bg-Primary-300 font-medium px-2 selection:text-Primary-300 selection:bg-white ">
              HOJE
            </span>{" "}
            COM A SEGURANÇA DO SEU PATRIMÔNIO
          </h1>
          <h3 className="font-normal text-xs w-[80vw] text-center md:text-base">
            Apartamentos com 120 a 150m² ao Perequê - Porto Belo
          </h3>
          <div>
            <button className="text-sm md:text-base font-semibold bg-transparent border-2 border-white rounded-full py-2 px-6 hover:tracking-widest hover:scale-105 hover:bg-Primary-300 hover:text-white transition-all duration-700">
              EXPLORE
            </button>
          </div>
        </div>
        <div
          className="absolute left-0 right-0 top-0 bottom-0"
          style={{ zIndex: "-1" }}
        >
          <iframe
            src="https://player.vimeo.com/video/835539482?autoplay=1&amp;loop=1&amp;autopause=0&amp;background=1"
            allow="autoplay; fullscreen"
            data-ready="true"
            style={{ zIndex: "-1" }}
            className="iframeBg"
          ></iframe>
          <div
            className="fixed top-0 right-0 left-0 bottom-0 -z-10 bg-[url(https://gdejr.com.br/_next/image?url=https%3A%2F%2Fcontent.centralcorretor.com.br%2Fprotected%2Fus-east-1%3Abdea757d-69f8-4f61-835b-367cfaf38196%2F9a8363e2-6ea1-4a93-b8eb-a576e1d9fa4c_xl.webp&w=1920&q=75)] 
bg-no-repeat"
          ></div>
          <div className="absolute top-0 left-0 w-full h-full bg-black/50"></div>
        </div>
        <footer className="flex justify-between px-8 items-center fixed bottom-0 h-16 w-screen">
          <Image
            src={FooterLeftElement}
            alt="Logo da Beach Residence"
            className=""
          />
          <Image
            src={FooterRightElement}
            alt="Logo da Beach Residence"
            className=""
          />
        </footer>
      </div>
    </>
  );
}
