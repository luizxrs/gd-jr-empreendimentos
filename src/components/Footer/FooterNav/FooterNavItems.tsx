import { ReactNode } from "react";

interface IFooterNavItems {
  children: ReactNode;
}

export default function FooterNavItems({ children }: IFooterNavItems) {
  return (
    <>
      <div className="text-black flex flex-col gap-2"> {children}</div>
    </>
  );
}
