import { ReactNode } from "react";

interface HeaderNavBarLi {
  children: ReactNode;
}

export default function HeaderNavBarLi({ children }: HeaderNavBarLi) {
  return (
    <>
      <li className="cursor-pointer font-base text-sm relative hover:text-Primary-100 h-24 w-max flex justify-center after:transition-all items-center after:absolute after:w-full after:h-0 after:hover:h-1 after:bg-[#dfc571] after:top-0">
        {children}
      </li>
    </>
  );
}
