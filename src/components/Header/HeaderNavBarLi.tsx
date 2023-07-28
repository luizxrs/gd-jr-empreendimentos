import { ReactNode } from "react";

interface HeaderNavBarLi {
  children: ReactNode
}

export default function HeaderNavBarLi({children}: HeaderNavBarLi) {
  return (
    <>
    <li className="cursor-pointer font-bold text-sm">
      {children}
    </li>
    </>
  );
}
