import Header from "@/components/Header/Header";
import BeachResidenceLogo from "@/assets/svg/beach-residence-logo.svg";
import FooterLeftElement from "@/assets/svg/footer-left-element.svg";
import FooterRightElement from "@/assets/svg/footer-right-element.svg";
import Image from "next/image";
import Footer from "@/components/Footer/Footer";

export default function EmpreendimentosPage() {
  return (
    <>
      <div className="flex flex-col justify-between w-screen overflow-hidden">
        <Header />
        <div className="pt-24 flex flex-col justify-center items-center w-screen bg-backgroundColor-100">
          <section className=" w-screen">
            <div className=" max-w-screen-xl m-auto">
              <div className="flex flex-col gap-2 h-96 my-12 w-full px-12 justify-center relative">
                <h1 className="text-5xl font-bold pointer-events-none z-20">
                  PRÉ <br />
                  <span className="text-Primary-100">LANÇAMENTO</span>
                </h1>
                <h1 className="text-9xl font-bold pointer-events-none absolute font-outline-1 text-transparent">
                  PRÉ <br />
                  LANÇAMENTO
                </h1>
              </div>
              <div className=" w-full h-[600px] gap-20 grid grid-cols-2">
                <div className=" relative group cursor-pointer">
                  <div className="place-self-start w-2/5 h-12 absolute p-10">
                    <Image
                      src={BeachResidenceLogo}
                      alt="Logo Beach Residence "
                    ></Image>
                  </div>
                  <div className="w-3/5 right-0 absolute h-full z-10 overflow-hidden">
                    <img //ALTERAR PARA IMAGE DO NEXT
                      className="w-full h-full object-cover scale-[1.02] transition-all group-hover:scale-100 duration-300"
                      src="https://gdejr.com.br/_next/image?url=https%3A%2F%2Fcentralcorretor.s3.sa-east-1.amazonaws.com%2Fprotected%2Fus-east-1%3A0a29d542-aa00-4b2d-b26f-e76af4199d66%2Fa8dfcb89-1e88-4abc-b5fd-5cb42d9ac228_xl.webp&w=1920&q=75"
                      alt=""
                    />
                  </div>
                  <div className="w-full h-4/6 bg-zinc-950 p-6 transition-all duration-300 -bottom-4 right-4 absolute flex flex-col justify-between items-start group-hover:right-3 group-hover:bg-zinc-900">
                    <div className="flex flex-col">
                      <div className="text-Primary-100">Icone</div>
                      <span>2 Quartos</span>
                    </div>
                    <div className="flex flex-col">
                      <div className="text-Primary-100">Icone</div>
                      <span>2 Quartos</span>
                    </div>
                    <div className="flex flex-col">
                      <div className="text-Primary-100">Icone</div>
                      <span>2 Quartos</span>
                    </div>
                    <div className="flex flex-col">
                      <div className="text-Primary-100">Icone</div>
                      <span>2 Quartos</span>
                    </div>
                  </div>
                </div>
                <div className=" relative group cursor-pointer">
                  <div className="place-self-start w-2/5 h-12 absolute p-10">
                    <Image
                      src={BeachResidenceLogo}
                      alt="Logo Beach Residence "
                    ></Image>
                  </div>
                  <div className="w-3/5 right-0 absolute h-full z-10 overflow-hidden">
                    <img //ALTERAR PARA IMAGE DO NEXT
                      className="w-full h-full object-cover scale-[1.02] transition-all group-hover:scale-100 duration-300"
                      src="https://gdejr.com.br/_next/image?url=https%3A%2F%2Fcentralcorretor.s3.sa-east-1.amazonaws.com%2Fprotected%2Fus-east-1%3A0a29d542-aa00-4b2d-b26f-e76af4199d66%2Fa8dfcb89-1e88-4abc-b5fd-5cb42d9ac228_xl.webp&w=1920&q=75"
                      alt=""
                    />
                  </div>
                  <div className="w-full h-4/6 bg-zinc-950 p-6 transition-all duration-300 -bottom-4 right-4 absolute flex flex-col justify-between items-start group-hover:right-3 group-hover:bg-zinc-900">
                    <div className="flex flex-col">
                      <div className="text-Primary-100">Icone</div>
                      <span>2 Quartos</span>
                    </div>
                    <div className="flex flex-col">
                      <div className="text-Primary-100">Icone</div>
                      <span>2 Quartos</span>
                    </div>
                    <div className="flex flex-col">
                      <div className="text-Primary-100">Icone</div>
                      <span>2 Quartos</span>
                    </div>
                    <div className="flex flex-col">
                      <div className="text-Primary-100">Icone</div>
                      <span>2 Quartos</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section className="w-screen mb-24">
            <div className=" max-w-screen-xl m-auto">
              <div className="flex flex-col gap-2 h-96 my-12 w-full px-12 justify-center relative">
                <h1 className="text-5xl font-bold pointer-events-none z-20">
                  EM <br />
                  <span className="text-Primary-100">CONSTRUÇÃO</span>
                </h1>
                <h1 className="text-9xl font-bold pointer-events-none absolute font-outline-1 text-transparent">
                  EM <br />
                  CONSTRUÇÃO
                </h1>
              </div>
              <div className=" w-full h-[600px] gap-20 grid grid-cols-2">
                <div className=" relative group cursor-pointer">
                  <div className="place-self-start w-2/5 h-12 absolute p-10">
                    <Image
                      src={BeachResidenceLogo}
                      alt="Logo Beach Residence "
                    ></Image>
                  </div>
                  <div className="w-3/5 right-0 absolute h-full z-10 overflow-hidden">
                    <img //ALTERAR PARA IMAGE DO NEXT
                      className="w-full h-full object-cover scale-[1.02] transition-all group-hover:scale-100 duration-300"
                      src="https://gdejr.com.br/_next/image?url=https%3A%2F%2Fcentralcorretor.s3.sa-east-1.amazonaws.com%2Fprotected%2Fus-east-1%3A0a29d542-aa00-4b2d-b26f-e76af4199d66%2Fa8dfcb89-1e88-4abc-b5fd-5cb42d9ac228_xl.webp&w=1920&q=75"
                      alt=""
                    />
                  </div>
                  <div className="w-full h-4/6 bg-zinc-950 p-6 transition-all duration-300 -bottom-4 right-4 absolute flex flex-col justify-between items-start group-hover:right-3 group-hover:bg-zinc-900">
                    <div className="flex flex-col">
                      <div className="text-Primary-100">Icone</div>
                      <span>2 Quartos</span>
                    </div>
                    <div className="flex flex-col">
                      <div className="text-Primary-100">Icone</div>
                      <span>2 Quartos</span>
                    </div>
                    <div className="flex flex-col">
                      <div className="text-Primary-100">Icone</div>
                      <span>2 Quartos</span>
                    </div>
                    <div className="flex flex-col">
                      <div className="text-Primary-100">Icone</div>
                      <span>2 Quartos</span>
                    </div>
                  </div>
                </div>
                <div className=" relative group cursor-pointer">
                  <div className="place-self-start w-2/5 h-12 absolute p-10">
                    <Image
                      src={BeachResidenceLogo}
                      alt="Logo Beach Residence "
                    ></Image>
                  </div>
                  <div className="w-3/5 right-0 absolute h-full z-10 overflow-hidden">
                    <img //ALTERAR PARA IMAGE DO NEXT
                      className="w-full h-full object-cover scale-[1.02] transition-all group-hover:scale-100 duration-300"
                      src="https://gdejr.com.br/_next/image?url=https%3A%2F%2Fcentralcorretor.s3.sa-east-1.amazonaws.com%2Fprotected%2Fus-east-1%3A0a29d542-aa00-4b2d-b26f-e76af4199d66%2Fa8dfcb89-1e88-4abc-b5fd-5cb42d9ac228_xl.webp&w=1920&q=75"
                      alt=""
                    />
                  </div>
                  <div className="w-full h-4/6 bg-zinc-950 p-6 transition-all duration-300 -bottom-4 right-4 absolute flex flex-col justify-between items-start group-hover:right-3 group-hover:bg-zinc-900">
                    <div className="flex flex-col">
                      <div className="text-Primary-100">Icone</div>
                      <span>2 Quartos</span>
                    </div>
                    <div className="flex flex-col">
                      <div className="text-Primary-100">Icone</div>
                      <span>2 Quartos</span>
                    </div>
                    <div className="flex flex-col">
                      <div className="text-Primary-100">Icone</div>
                      <span>4 Quartos</span>
                    </div>
                    <div className="flex flex-col">
                      <div className="text-Primary-100">Icone</div>
                      <span>2 Quartos</span>
                    </div>
                  </div>
                </div>
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
        <Footer />
      </div>
    </>
  );
}
