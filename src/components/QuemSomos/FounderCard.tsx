import { IFounderCard } from "@/app/quemsomos/founders";
import Image, { StaticImageData } from "next/image";


export default function FounderCard({ founderInfo }: IFounderCard) {
  return (
    <>
      <div className=" h-full relative group">
        <div className="absolute inset-0 bottom-10 bg-zinc-900/30 z-10 group-hover:opacity-0 transition-opacity duration-700"></div>
        <div className="absolute top-0 bottom-10 right-0 left-0">
          <p className="[writing-mode:vertical-lr] rotate-180 text-4xl font-extralight text-white absolute left-4 bottom-4 z-10 group-hover:-translate-y-5 group-hover:opacity-0 transition-all duration-700">
            {founderInfo.title}
          </p>
          <p className="text-5xl font-bold text-white absolute right-6 bottom-6 z-10 group-hover:-translate-y-5 group-hover:opacity-0 transition-all duration-700">
            {founderInfo.name}
          </p>
          <p className="overflow-visible text-7xl font-bold text-white absolute right-6 opacity-0 -bottom-6 group-hover:-translate-x-5 group-hover:opacity-100 transition-all z-40 duration-700">
            {founderInfo.name}
          </p>
          <div className="absolute top-0 bottom-0 right-0 left-0 overflow-hidden">
            <Image
              src={founderInfo.img}
              alt="Gustavo Fundador da empresa"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
            ></Image>
          </div>
        </div>
      </div>
    </>
  );
}
