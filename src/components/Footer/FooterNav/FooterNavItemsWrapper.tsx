import React, { ReactNode } from "react";

interface IFooterNavItemWrapper {
  children: ReactNode;
}

export default function FooterNavItemWrapper({
  children,
}: IFooterNavItemWrapper) {
  const childrenWithPointerCursor = React.Children.map(children, (child) => {
    if (React.isValidElement(child)) {
      return React.cloneElement(child, {
        className: "cursor-pointer hover:text-black",
      } as React.HTMLProps<HTMLAnchorElement>);
    }
    return child;
  });
  return (
    <>
      <div className="text-zinc-800 flex flex-col gap-2 text-base font-normal">
        {childrenWithPointerCursor}
      </div>
    </>
  );
}
