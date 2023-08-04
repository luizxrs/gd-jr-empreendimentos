import aboutUsImage1 from "@/../public/images/about-us-image-1.webp";
import aboutUsImage2 from "@/../public/images/about-us-image-2.webp";
import { StaticImageData } from "next/image";

export interface IFounderCard {
  founderInfo: {
    img: StaticImageData;
    title: string;
    name: string;
  };
}


const founderCards: IFounderCard[] = [
  {
    founderInfo: {
      img: aboutUsImage1,
      title: "CEO COFOUNDER",
      name: "Gustavo",
    },
  },
  {
    founderInfo: {
      img: aboutUsImage2,
      title: "CEO COFOUNDER",
      name: "Jair",
    },
  },
];

export default founderCards;