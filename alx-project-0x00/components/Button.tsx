import React from "react";
import { ButtonProps } from "@/interfaces";

const Button: React.FC<ButtonProps> = ({ title, styles }) => {
  return (
    <button
      className={`flex bg-blue-500 text-white font-semibold px-4 py-2 ${styles}`}
    >
      {title}
    </button>
  );
};

export default Button;
