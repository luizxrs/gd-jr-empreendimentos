import { ReactNode } from "react";

interface IFooterNavWrapper {
  children: ReactNode;
}

export default function FooterNavWrapper({ children }: IFooterNavWrapper) {
  return (
    <>
      <li className="cursor-pointer font-bold text-xs relative hover:text-Primary-200 h-24 w-max flex justify-center after:transition-all items-center after:absolute after:w-full after:h-0 after:hover:h-1 after:bg-[#dfc571] after:top-0">
        {children}
      </li>
    </>
  );
}
