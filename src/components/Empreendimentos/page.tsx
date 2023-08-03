"use client";

import Image from "next/image";
import SectionTitle from "./SectionTitle";
import BuildingCard from "./BuildingCard";
import buildingCards from "@/app/empreendimentos/buildings";

export default function EmpreendimentosPage() {
  return (
    <>
      <div className="pt-24 flex flex-col justify-center items-center w-screen bg-backgroundColor-100">
        <section className=" w-screen">
          <div className=" max-w-screen-xl m-auto">
            <SectionTitle text="Pré Lançamento" />
            <div className=" w-full h-[600px] gap-20 grid grid-cols-2">
              {buildingCards.map((buildingCard, index) => (
                <BuildingCard
                  buildingInfo={buildingCard.buildingInfo}
                  key={index}
                />
              ))}
            </div>
          </div>
        </section>
        <section className="w-screen mb-24">
          <div className=" max-w-screen-xl m-auto">
            <SectionTitle text="EM CONSTRUÇÃO" />
            <div className=" w-full h-[600px] gap-20 grid grid-cols-2">
              {buildingCards.map((buildingCard, index) => (
                <BuildingCard
                  buildingInfo={buildingCard.buildingInfo}
                  key={index}
                />
              ))}
            </div>
          </div>
        </section>
        <section className="w-screen m-auto overflow-hidden relative">
          <div className="py-56 flex justify-around items-center flex-col gap-4">
            <h2 className="text-5xl font-bold">
              CONHEÇA NOSSAS{" "}
              <span className="text-Primary-100">OBRAS ENTREGUES</span>
            </h2>
            <button className="w-52 h-8 tracking-wider rounded-full bg-Primary-300 hover:bg-Primary-400">
              VER PORTFÓLIO
            </button>
          </div>
          <div className="absolute top-0 left-0 w-full h-full pointer-events-none opacity-10">
            <Image
              src={
                "https://gdejr.com.br/_next/image?url=https%3A%2F%2Fcontent.centralcorretor.com.br%2Fprotected%2Fus-east-1%3Abdea757d-69f8-4f61-835b-367cfaf38196%2F6d02e74a-e19a-4e82-8157-00922fb61a2c_xl.webp&w=750&q=75"
              }
              layout="fill"
              objectFit="cover"
              alt="Imagem referencia de um arquiteto"
            />
          </div>
        </section>
        <section className="w-screen m-auto overflow-hidden">
          <div className="px-32 py-20 flex justify-around items-center gap-4 bg-Primary-300">
            <div className="flex justify-between items-center gap-20 w-full">
              <h2 className="text-5xl font-bold">
                CADASTRE-SE E <br /> RECEBA NOVIDADES
              </h2>
              <div className="">
                <form action="POST" className="flex flex-col gap-4">
                  <input
                    type="text"
                    placeholder="Nome"
                    className="bg-transparent border-b-2 transition-all border-zinc-200 placeholder:text-zinc-200 p-2 w-96 hover:placeholder:text-zinc-50 hover:border-zinc-50 focus:outline-none"
                  />
                  <input
                    type="email"
                    placeholder="Email"
                    className="bg-transparent border-b-2 transition-all border-zinc-200 placeholder:text-zinc-200 p-2 w-96 hover:placeholder:text-zinc-50 hover:border-zinc-50 focus:outline-none"
                  />
                  <button
                    type="submit"
                    className="self-end tracking-widest font-semibold hover:bg-zinc-800 rounded-full py-1 px-10 transition-all"
                  >
                    ENVIAR
                  </button>
                </form>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
