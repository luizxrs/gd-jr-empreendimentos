"use client";

import Image from "next/image";
import Logo from "@/assets/svg/gdjr-logo.svg";
import { HeaderElements } from "./index";
import { useState } from "react";
import { twMerge } from "tailwind-merge";
import { GiHamburgerMenu } from "react-icons/gi";
import { GrFormClose } from "react-icons/gr";
import { AiOutlineWhatsApp, AiFillInstagram } from "react-icons/ai";
import { BsFacebook, BsYoutube } from "react-icons/bs";

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

  window?.addEventListener("scroll", setFixed);

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
          <GrFormClose size="3rem" />
        </div>
        <nav className="flex justify-center items-center left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 absolute">
          <ul className="flex justify-between items-center gap-4 flex-col font-bold text-2xl text-center text-white/80">
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
            <a href="/oportunidades" className="hover:text-white">
              OPORTUNIDADES
            </a>
            <a href="/portfolio" className="hover:text-white">
              PORTFÓLIO
            </a>
            <a href="/fale conosco" className="hover:text-white">
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
            className="transition-colors hover:text-white"
          >
            <svg
              fill="currentColor"
              className="h-6 w-6"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
              data-darkreader-inline-fill=""
            >
              <path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z"></path>
            </svg>
          </a>
          <a
            target="_blank"
            rel="noreferrer"
            title="Visite nosso Instagram"
            href="https://www.instagram.com/gdejrconst"
            className="transition-colors hover:text-white"
          >
            <svg
              fill="currentColor"
              className="h-6 w-6 "
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 448 512"
              data-darkreader-inline-fill=""
            >
              <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"></path>
            </svg>
          </a>
          <a
            target="_blank"
            rel="noreferrer"
            title="Corretor acesse nossos empreendimentos no aplicativo Central Corretor"
            href="https://youtube.com.br/"
            className="transition-colors hover:text-white"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 "
              fill="currentColor"
              viewBox="0 0 16 16"
              data-darkreader-inline-color=""
            >
              <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z"></path>
            </svg>
          </a>
          <a
            target="_blank"
            rel="noreferrer"
            title="Corretor acesse nossos empreendimentos no aplicativo Central Corretor"
            href="https://youtube.com.br/"
            className="transition-colors hover:text-white"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 16 16"
              className="h-6 w-6 "
              data-darkreader-inline-color=""
            >
              {" "}
              <path d="M8.051 1.999h.089c.822.003 4.987.033 6.11.335a2.01 2.01 0 0 1 1.415 1.42c.101.38.172.883.22 1.402l.01.104.022.26.008.104c.065.914.073 1.77.074 1.957v.075c-.001.194-.01 1.108-.082 2.06l-.008.105-.009.104c-.05.572-.124 1.14-.235 1.558a2.007 2.007 0 0 1-1.415 1.42c-1.16.312-5.569.334-6.18.335h-.142c-.309 0-1.587-.006-2.927-.052l-.17-.006-.087-.004-.171-.007-.171-.007c-1.11-.049-2.167-.128-2.654-.26a2.007 2.007 0 0 1-1.415-1.419c-.111-.417-.185-.986-.235-1.558L.09 9.82l-.008-.104A31.4 31.4 0 0 1 0 7.68v-.123c.002-.215.01-.958.064-1.778l.007-.103.003-.052.008-.104.022-.26.01-.104c.048-.519.119-1.023.22-1.402a2.007 2.007 0 0 1 1.415-1.42c.487-.13 1.544-.21 2.654-.26l.17-.007.172-.006.086-.003.171-.007A99.788 99.788 0 0 1 7.858 2h.193zM6.4 5.209v4.818l4.157-2.408L6.4 5.209z"></path>{" "}
            </svg>
          </a>
        </div>
      </div>
      <header
        className={twMerge(
          "p-6 h-24 w-screen fixed top-0 flex justify-between items-center z-50  text-white antialiased transition-all selection:bg-Primary-300",
          fix ? "bg-zinc-900/75 backdrop-blur-sm" : "bg-transparent"
        )}
      >
        <nav className="w-screen p-4">
          <div className="flex justify-between items-center lg:gap-12">
            <div>
              <a href="/">
                <Image
                  src={Logo}
                  alt="Logo da GD & JR Empreendimentos"
                  className="scale-75"
                ></Image>
              </a>
            </div>
            <div
              className="text-white ml-auto cursor-pointer lg:hidden"
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
