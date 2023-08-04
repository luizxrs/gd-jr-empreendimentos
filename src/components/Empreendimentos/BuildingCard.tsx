import { IBuildingCard } from "@/app/empreendimentos/buildings";
import { BiLocationPlus, BiSolidArea, BiSolidBed, BiSolidCar } from 'react-icons/bi'

import Image from "next/image";



export default function BuildingCard({ buildingInfo }: IBuildingCard) {
  return (
    <>
      <div className="w-full h-full relative group cursor-pointer">
        <div className="place-self-start w-2/5 h-12 absolute p-10">
          <Image src={buildingInfo.logoImg} alt="Logo Beach Residence "></Image>
        </div>
        <div className="w-3/5 right-0 bottom-10 h-[40vw] absolute z-10 overflow-hidden">
          <Image
            className=" w-full h-full object-cover scale-[1.02] transition-all pointer-events-none group-hover:scale-100 duration-300"
            src={buildingInfo.buildingImg}
            alt=""
            fill 
          />
        </div>
        <div className="w-full h-4/6 bg-zinc-950 p-6 transition-all duration-300 -bottom-4 right-4 absolute flex flex-col justify-between items-start group-hover:right-3 group-hover:bg-zinc-900">
          <div className="flex flex-col">
            <div className="text-Primary-100 pb-2"><BiSolidBed size="2rem"/></div>
            <span>{buildingInfo.insideInfo.quartos} Quartos</span>
          </div>
          <div className="flex flex-col">
            <div className="text-Primary-100 pb-2"><BiLocationPlus  size="2rem"/></div>
            <span>{buildingInfo.insideInfo.local}</span>
          </div>
          <div className="flex flex-col">
            <div className="text-Primary-100 pb-2"><BiSolidCar  size="2rem"/></div>
            <span>{buildingInfo.insideInfo.vagas} Vagas</span>
          </div>
          <div className="flex flex-col">
            <div className="text-Primary-100 pb-2"><BiSolidArea  size="2rem"/></div>
            <span>{buildingInfo.insideInfo.area}</span>
          </div>
        </div>
      </div>
    </>
  );
}
