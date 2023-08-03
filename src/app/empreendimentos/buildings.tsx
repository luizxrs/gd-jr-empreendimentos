import BeachResidenceLogo from "@/assets/svg/beach-residence-logo.svg";

import { StaticImageData } from "next/image";

export interface IInsideInfo {
  area: string;
  quartos: number;
  vagas: number;
  local: string;
}

export interface IBuildingCard {
  buildingInfo: {
    id: number;
    logoImg: StaticImageData;
    buildingImg: string;
    altImg: string;
    insideInfo: IInsideInfo; // Using the IInsideInfo interface here
  };
}

const buildingCards: IBuildingCard[] = [
  {
    buildingInfo: {
      id: 1,
      logoImg: BeachResidenceLogo,
      buildingImg:
        "https://gdejr.com.br/_next/image?url=https%3A%2F%2Fcentralcorretor.s3.sa-east-1.amazonaws.com%2Fprotected%2Fus-east-1%3A0a29d542-aa00-4b2d-b26f-e76af4199d66%2Fa8dfcb89-1e88-4abc-b5fd-5cb42d9ac228_xl.webp&w=1920&q=75",
      altImg: "Logo Beach Residence",
      insideInfo: {
        area: "Aqui temos a area",
        quartos: 9,
        vagas: 2,
        local: "Meia Praia",
      },
    },
  },
  {
    buildingInfo: {
      id: 2,
      logoImg: BeachResidenceLogo,
      buildingImg:
        "https://gdejr.com.br/_next/image?url=https%3A%2F%2Fcentralcorretor.s3.sa-east-1.amazonaws.com%2Fprotected%2Fus-east-1%3A0a29d542-aa00-4b2d-b26f-e76af4199d66%2Fa8dfcb89-1e88-4abc-b5fd-5cb42d9ac228_xl.webp&w=1920&q=75",
      altImg: "Logo Beach Residence",
      insideInfo: {
        area: "123 m2",
        quartos: 4,
        vagas: 2,
        local: "Perequê",
      },
    },
  },
];

export default buildingCards;
