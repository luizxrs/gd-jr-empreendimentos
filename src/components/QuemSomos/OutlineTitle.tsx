import { ReactNode } from "react";

interface IOutlineTitle {
  children: ReactNode;
}

export default function OutlineTitle({ children }: IOutlineTitle) {
  return (
    <>
    <h1 className="text-center pb-5 text-[4vw] font-bold pointer-events-none absolute scale-[4] self-start left-1/2 -translate-x-1/2 font-outline-1 op text-transparent">
      {children}
    </h1>
    </>
  );
}
