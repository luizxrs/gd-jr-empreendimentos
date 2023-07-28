import Header from "@/components/Header/Header";
import BeachResidenceLogo from "@/assets/svg/beach-residence-logo.svg";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Header />
      <div className="flex flex-col justify-center items-center w-screen h-screen">
        <div className="w-2/6 h-3/6  relative bg-slate-700 flex flex-col justify-between items-center">
          <div className="w-44 h-36">
            <Image
              src={BeachResidenceLogo}
              alt="Logo da Beach Residence"
              className=""
            />
          </div>
          <h1 className="text-5xl max-w-xl font-light text-center">VIVA O HOJE COM A SEGURANÇA DO SEU PATRIMÔNIO</h1>
          <h3>Apartamentos com 120 a 150m² ao Perequê - Porto Belo</h3>
          <div>
            <button>EXPLORE</button>
          </div>
        </div>
      </div>
    </>
  );
}
