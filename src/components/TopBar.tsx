import React from "react";

interface Props {
  setShowNav: React.Dispatch<React.SetStateAction<boolean>>;
  showNav: boolean;
}

const TopBar = ({ setShowNav, showNav }: Props) => {
  return <div>TopBar</div>;
};

export default TopBar;
