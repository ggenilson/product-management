import React from "react";
import "./style.scss";

type BoxProps = {
  purple?: boolean;
  fullHeight?: boolean;
  children: React.ReactNode;
};

const Box: React.FC<BoxProps> = ({ purple, fullHeight, children }) => {
  const className = {
    box: "box",
    purple: purple && "box-purple",
    fullHeight: fullHeight && "box-fullheight",
  };

  return <div className={Object.values(className).join(" ")}>{children}</div>;
};

export default Box;
