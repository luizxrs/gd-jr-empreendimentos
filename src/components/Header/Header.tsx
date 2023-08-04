"use client";

import Image from "next/image";
import Logo from "@/assets/svg/gdjr-logo.svg";
import { HeaderElements } from "./index";
import { useState } from "react";
import { twMerge } from "tailwind-merge";
import { GiHamburgerMenu } from "react-icons/gi";
import { GrFormClose } from "react-icons/gr";
import {
  AiOutlineWhatsApp,
  AiFillInstagram,
  AiOutlineClose,
} from "react-icons/ai";
import { BsFacebook, BsYoutube } from "react-icons/bs";
import { useEffect } from "react";

export default function Header() {
  const [fix, setFix] = useState(false);
  const [openBurger, setOpenBurger] = useState(false);

  const setFixed = () => {
    if (window.scrollY > 10) {
      setFix(true);
    } else {
      setFix(false);
    }
  };

  if (typeof window !== "undefined") {
    window.addEventListener("scroll", setFixed);
  }

  return (
    <>
      <div
        className={twMerge(
          "absolute top-0 bottom-0 h-screen w-screen left-0 right-0 bg-Primary-300/95 z-[99] overflow-hidden transition-all duration-[100ms]",
          openBurger ? "scale-100 fixed" : "scale-0"
        )}
      >
        <div
          className="text-white ml-auto cursor-pointer absolute right-10 top-8"
          onClick={() => setOpenBurger(!openBurger)}
        >
          <AiOutlineClose size="3rem" />
        </div>
        <nav className="flex justify-center items-center left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 absolute">
          <ul className="flex justify-between items-center gap-4 flex-col font-bold text-base text-center text-white/80 md:text-2xl">
            <a href="/" className="hover:text-white">
              INÍCIO
            </a>
            <a href="/empreendimentos" className="hover:text-white">
              EMPREENDIMENTOS
            </a>

            <a href="/" className="font-light mt-4 hover:text-white">
              GRAN PALACE
            </a>
            <a href="/" className="font-light hover:text-white">
              SUN BEACH RESIDENCE
            </a>
            <a href="/" className="font-light hover:text-white">
              BELLE MAISON
            </a>
            <a href="/" className="font-light hover:text-white mb-4">
              BEAU LAC RESIDENCE
            </a>

            <a href="/quemsomos" className="hover:text-white">
              SOBRE NÓS
            </a>
            <a href="/" className="hover:text-white">
              OPORTUNIDADES
            </a>
            <a href="/" className="hover:text-white">
              PORTFÓLIO
            </a>
            <a href="/" className="hover:text-white">
              FALE CONOSCO
            </a>
          </ul>
        </nav>
        <div className="absolute bottom-5 left-1/2 -translate-x-1/2 text-zinc-100 flex gap-4">
          <a
            target="_blank"
            rel="noreferrer"
            title="Fale conosco via WhatsApp"
            href="https://wa.me/+5548999764513/?text=Olá, gostaria de mais informações sobre os empreeendimentos"
            className="transition-colors hover:text-Primary-100"
          >
            <AiOutlineWhatsApp size="1rem" />
          </a>
          <a
            target="_blank"
            rel="noreferrer"
            title="Visite nosso Instagram"
            href="https://www.instagram.com/gdejrconst"
            className="transition-colors hover:text-Primary-100"
          >
            <AiFillInstagram size="1rem" />
          </a>
          <a
            target="_blank"
            rel="noreferrer"
            title="Corretor acesse nossos empreendimentos no aplicativo Central Corretor"
            href="https://youtube.com.br/"
            className="transition-colors hover:text-Primary-100"
          >
            <BsYoutube size="1rem" />
          </a>
          <a
            target="_blank"
            rel="noreferrer"
            title="Corretor acesse nossos empreendimentos no aplicativo Central Corretor"
            href="https://youtube.com.br/"
            className="transition-colors hover:text-Primary-100"
          >
            <BsFacebook size="1rem" />
          </a>
        </div>
      </div>
      <header
        className={twMerge(
          " h-24 w-screen fixed top-0 flex justify-between items-center z-50  text-white antialiased transition-all selection:bg-Primary-300",
          fix ? "bg-zinc-900/75 backdrop-blur-sm" : "bg-transparent"
        )}
      >
        <nav className="w-screen p-4">
          <div className="flex justify-between items-center lg:gap-12">
            <div className=" flex justify-start">
              <a href="/" className="mr-auto">
                <Image
                  src={Logo}
                  alt="Logo da GD & JR Empreendimentos"
                  className="w-24 ml-auto"
                ></Image>
              </a>
            </div>
            <div
              className="text-white ml-auto mr-4 cursor-pointer lg:hidden"
              onClick={() => setOpenBurger(!openBurger)}
            >
              <GiHamburgerMenu size="3rem" />
            </div>
            <div>
              <ul className=" justify-between items-center gap-14 hidden lg:flex ">
                <HeaderElements.NavBarLi>
                  <a href="/empreendimentos">EMPREENDIMENTOS</a>
                </HeaderElements.NavBarLi>
                <HeaderElements.NavBarLi>
                  <a href="/quemsomos">SOBRE NÓS</a>
                </HeaderElements.NavBarLi>
                <HeaderElements.NavBarLi>
                  <a href="/oportunidades">OPORTUNIDADES</a>
                </HeaderElements.NavBarLi>
                <HeaderElements.NavBarLi>
                  <a href="/portfolio">PORTFÓLIO</a>
                </HeaderElements.NavBarLi>
                <HeaderElements.NavBarLi>
                  <a href="/fale conosco">FALE CONOSCO</a>
                </HeaderElements.NavBarLi>
              </ul>
            </div>
            <div>
              <div className="w-full hidden lg:block ">
                <div className="w-36 float-right grid grid-flow-col">
                  <a
                    target="_blank"
                    rel="noreferrer"
                    title="Fale conosco via WhatsApp"
                    href="https://wa.me/+5548999764513/?text=Olá, gostaria de mais informações sobre os empreeendimentos"
                    className="transition-colors hover:text-Primary-100"
                  >
                    <AiOutlineWhatsApp size="1.4rem" />
                  </a>
                  <a
                    target="_blank"
                    rel="noreferrer"
                    title="Visite nosso Instagram"
                    href="https://www.instagram.com/gdejrconst"
                    className="transition-colors hover:text-Primary-100"
                  >
                    <AiFillInstagram size="1.4rem" />
                  </a>
                  <a
                    target="_blank"
                    rel="noreferrer"
                    title="Corretor acesse nossos empreendimentos no aplicativo Central Corretor"
                    href="https://youtube.com.br/"
                    className="transition-colors hover:text-Primary-100"
                  >
                    <BsYoutube size="1.4rem" />
                  </a>
                  <a
                    target="_blank"
                    rel="noreferrer"
                    title="Corretor acesse nossos empreendimentos no aplicativo Central Corretor"
                    href="https://youtube.com.br/"
                    className="transition-colors hover:text-Primary-100"
                  >
                    <BsFacebook size="1.4rem" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </nav>
      </header>
    </>
  );
}
