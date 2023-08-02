import { ReactNode } from "react";

interface IFooterNavTitle {
  children: ReactNode;
}

export default function FooterNavTitle({ children }: IFooterNavTitle) {
  return (
    <>
      <h3 className="mb-2 text-3xl text-black font-bold h-14 flex items-start justify-start flex-col before:h-1.5 before:w-14 before:mb-2 before:bg-Primary-100">
        {children}
      </h3>
    </>
  );
}
