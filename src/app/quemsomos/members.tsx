import aboutUsImage1 from "@/../public/images/about-us-image-1.webp";
import aboutUsImage2 from "@/../public/images/about-us-image-2.webp";
import { StaticImageData } from "next/image";

interface AboutUsItem {
  image: StaticImageData;
  title: string;
}


const aboutUsData: AboutUsItem[] = [
  {
    image: aboutUsImage1,
    title: "Tayse - Gerente",
  },
  {
    image: aboutUsImage2,
    title: "Marcos - Gerente Comercial",
  },
  {
    image: aboutUsImage1,
    title: "Tayse - Gerente",
  },
  {
    image: aboutUsImage2,
    title: "Marcos - Gerente Comercial",
  },
];

export default aboutUsData;
