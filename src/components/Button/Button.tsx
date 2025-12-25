import React from "react";
import styles from "./Button.module.scss";

type ButtonProps = {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
  type?: "button" | "submit" | "reset";
};

export default function Button({
  children,
  onClick,
  className,
  type = "button",
}: ButtonProps) {
  // merge the module class with any incoming className
  const cls = [styles.button, className].filter(Boolean).join(" ");
  return (
    <button type={type} className={cls} onClick={onClick}>
      {children}
    </button>
  );
}
