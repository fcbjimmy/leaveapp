import { forwardRef, ForwardRefRenderFunction, LegacyRef } from "react";
import { HomeIcon, CreditCardIcon, UserIcon } from "@heroicons/react/24/solid";

interface Props {
  showNav: boolean;
}

export type Ref = HTMLDivElement;

const SideBar = forwardRef<Ref, Props>(({ showNav }: Props, ref) => {
  return <div ref={ref} className="fixed w-56 h-full bg-white shadow-sm"></div>;
});

SideBar.displayName = "SideBar";

export default SideBar;
