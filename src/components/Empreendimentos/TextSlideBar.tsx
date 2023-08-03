import { twMerge } from "tailwind-merge";

interface ITextSlideBar {
  direction: "left" | "right";
}

export default function TextSlideBar({ direction }: ITextSlideBar) {
  return (
    <>
      <div
        className={twMerge(
          "grid grid-flow-col py-12 animate-slideLeft",
          direction === "left" ? "animate-slideLeft" : "animate-slideRight"
        )}
      >
        <h1 className="w-[36rem] text-4xl font-bold text-left uppercase">
          tecnologia avançada <br />{" "}
          <span className="text-Primary-100">para resultados precisos</span>
        </h1>
        <h1 className="w-[36rem] text-4xl font-bold text-left uppercase">
          transparencia total <br />{" "}
          <span className="text-Primary-100">em todo processo</span>
        </h1>
        <h1 className="w-[36rem] text-4xl font-bold text-left uppercase">
          compromisso com prazos <br />{" "}
          <span className="text-Primary-100">entrega garantida</span>
        </h1>
        <h1 className="w-[36rem] text-4xl font-bold text-left uppercase">
          qualidade em <br />{" "}
          <span className="text-Primary-100">todos os detalhes</span>
        </h1>
        <h1 className="w-[36rem] text-4xl font-bold text-left uppercase">
          tecnologia avançada <br />{" "}
          <span className="text-Primary-100">para resultados precisos</span>
        </h1>
        <h1 className="w-[36rem] text-4xl font-bold text-left uppercase">
          transparencia total <br />{" "}
          <span className="text-Primary-100">em todo processo</span>
        </h1>
        <h1 className="w-[36rem] text-4xl font-bold text-left uppercase">
          compromisso com prazos <br />{" "}
          <span className="text-Primary-100">entrega garantida</span>
        </h1>
        <h1 className="w-[36rem] text-4xl font-bold text-left uppercase">
          qualidade em <br />{" "}
          <span className="text-Primary-100">todos os detalhes</span>
        </h1>
      </div>
    </>
  );
}
