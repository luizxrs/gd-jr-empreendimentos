import { IBuildingCard } from "@/app/empreendimentos/buildings";
import {
  BiLocationPlus,
  BiSolidArea,
  BiSolidBed,
  BiSolidCar,
} from "react-icons/bi";

import Image from "next/image";

export default function BuildingCard({ buildingInfo }: IBuildingCard) {
  return (
    <>
      <div className="w-full h-full relative group cursor-pointer">
        <div className="w-2/5 p-4 h-24">
          <Image
            src={buildingInfo.logoImg}
            alt="Logo Beach Residence "
            className="pointer-events-none"
            objectFit="contain"
          ></Image>
        </div>
        <div className="w-3/5 right-0 top-0 bottom-5 absolute z-10 overflow-hidden">
          <Image
            className=" w-full h-full object-cover scale-[1.02] transition-all pointer-events-none group-hover:scale-100 duration-300"
            src={buildingInfo.buildingImg}
            alt=""
            fill
          />
        </div>
        <div className="text-xs md:text-base w-full h-4/6 bg-zinc-950 p-6 md:p-[3vw] transition-all duration-300 -bottom-4 right-4 absolute flex flex-col justify-between items-start group-hover:right-3 group-hover:bg-zinc-900">
          <div className="flex flex-col">
            <div className="text-Primary-100 pb-2">
              <BiSolidBed size="1.5rem" />
            </div>
            <span className="w-20 md:w-[20vw]">
              {buildingInfo.insideInfo.quartos} Quartos
            </span>
          </div>
          <div className="flex flex-col">
            <div className="text-Primary-100 pb-2">
              <BiLocationPlus size="1.5rem" />
            </div>
            <span className="w-20 md:w-[20vw]">
              {buildingInfo.insideInfo.local}
            </span>
          </div>
          <div className="flex flex-col">
            <div className="text-Primary-100 pb-2">
              <BiSolidCar size="1.5rem" />
            </div>
            <span className="w-20 md:w-[20vw]">
              {buildingInfo.insideInfo.vagas} Vagas
            </span>
          </div>
          <div className="flex flex-col">
            <div className="text-Primary-100 pb-2">
              <BiSolidArea size="1.5rem" />
            </div>
            <span className="w-20 md:w-[20vw]">
              {buildingInfo.insideInfo.area}
            </span>
          </div>
        </div>
      </div>
    </>
  );
}
