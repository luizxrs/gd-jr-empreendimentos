import Image from "next/image";
import FooterLogo from "@/assets/svg/footer-logo.svg";
import { Footer } from "./index";

export default function FooterComponent() {
  return (
    <>
      <footer className="w-screen flex justify-between items-center relative text-white antialiased">
        <Footer.SocialWindow />
        <div className="w-screen h-full bg-white text-black">
          <div className="bg-white h-full w-full px-16 py-8 flex flex-col justify-between item">
            <div className="flex items-top justify-start gap-12 px-12 pr-12 py-16">
              <div>
                <Footer.NavBarTitle>EMPREENDIMENTOS</Footer.NavBarTitle>
                <Footer.ItemsWrapper>
                  <a href="/sunbeachresidence" className="cursor-pointer motion-safe:animate-fadeIn">
                    Sun Beach Residence
                  </a>
                  <a href="/sunbeachresidence" className="cursor-pointer">
                    Gran Palace Residence
                  </a>
                  <a href="/sunbeachresidence" className="cursor-pointer">
                    Beau Lac Residence
                  </a>
                  <a href="/sunbeachresidence" className="cursor-pointer">
                    Bello Bosque Residence
                  </a>
                </Footer.ItemsWrapper>
              </div>
              <div>
                <Footer.NavBarTitle>MAIS CANAIS</Footer.NavBarTitle>
                <Footer.ItemsWrapper>
                  <a href="/sunbeachresidence" className="cursor-pointer">
                    Trabalhe conosco
                  </a>
                  <a href="/sunbeachresidence" className="cursor-pointer">
                    Portal do Cliente
                  </a>
                </Footer.ItemsWrapper>
              </div>
              <div>
                <Footer.NavBarTitle>FERRAMENTAS</Footer.NavBarTitle>
                <Footer.ItemsWrapper>
                  <a href="/sunbeachresidence" className="cursor-pointer">
                    CUB / SC
                  </a>
                </Footer.ItemsWrapper>
              </div>
            </div>
            <div className="border-t-2 grid grid-cols-3 py-4 text-Primary-100 font-bold text-sm text-center">
              <div className=" flex items-center">GD&JR@2023</div>
              <div className=" flex items-center justify-center">
                <Image src={FooterLogo} alt="Logo GD & JR Empreendimentos" />
              </div>
              <div className="flex items-center justify-end gap-2 ">
                DESENVOLVIDO POR
                <svg
                  fill="currentColor"
                  className="h-8 w-8"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 3.44 3.86"
                >
                  <path d="M3.33 2.83c-0.1,-0.05 -0.23,-0.03 -0.3,0.05 -0.02,0.03 -0.05,0.06 -0.08,0.09 -0.68,0.68 -1.86,0.55 -2.34,-0.4 -0.2,-0.4 -0.2,-0.88 0,-1.28 0.48,-0.95 1.66,-1.09 2.34,-0.4 0.03,0.03 0.05,0.05 0.08,0.08 0.07,0.09 0.2,0.11 0.3,0.05 0.12,-0.06 0.15,-0.22 0.06,-0.33 -0.04,-0.04 -0.08,-0.08 -0.12,-0.13 -0.88,-0.89 -2.42,-0.72 -3.06,0.51 -0.28,0.53 -0.28,1.18 0,1.72 0.64,1.23 2.18,1.4 3.06,0.5 0.04,-0.04 0.08,-0.08 0.12,-0.12 0.09,-0.11 0.05,-0.27 -0.06,-0.34zm-1.03 -0.52c-0.21,0.21 -0.54,0.21 -0.75,0 -0.21,-0.21 -0.21,-0.55 0,-0.76 0.21,-0.21 0.54,-0.21 0.75,0 0.21,0.21 0.21,0.55 0,0.76zm0.33 -1.09c-0.39,-0.4 -1.02,-0.4 -1.41,0 -0.39,0.39 -0.39,1.03 0,1.42 0.39,0.4 1.02,0.4 1.41,0 0.39,-0.39 0.39,-1.03 0,-1.42z"></path>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
