import { FC } from "react";
import "./Button.style.scss";
import { TButton } from "./Button.types";

export const Button: FC<TButton> = ({ onClick, children }) => {
  const handleOnClick = () => {
    onClick && onClick();
  };

  return (
    <button type="button" className="main-button" onClick={handleOnClick}>
      {children}
    </button>
  );
};
