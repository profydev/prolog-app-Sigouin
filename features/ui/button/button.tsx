import React, { ButtonHTMLAttributes } from "react";
import classNames from "classnames";
import styles from "./button.module.scss";

export enum ButtonSize {
  sm = "sm",
  md = "md",
  lg = "lg",
  xl = "xl",
}

export enum ButtonColor {
  primary = "primary",
  secondary = "secondary",
  gray = "gray",
  empty = "empty",
  emptyGray = "emptyGray",
  error = "error",
  emptyError = "emptyError",
}

export type ButtonIcon = React.ReactNode;

export enum ButtonIconPosition {
  leading = "leading",
  trailing = "trailing",
}

type ButtonProps = {
  children: React.ReactNode;
  size?: ButtonSize;
  color?: ButtonColor;
  icon?: ButtonIcon;
  iconPosition?: ButtonIconPosition | string;
} & ButtonHTMLAttributes<HTMLButtonElement>;

export function Button({
  children,
  icon,
  size,
  color,
  iconPosition,
  ...props
}: ButtonProps) {
  const hasIcon = icon ? "hasIcon" : "";

  return (
    <button
      {...props}
      className={classNames(
        styles.button,
        props.className,
        styles[size || ""],
        styles[color || ""],
        styles[hasIcon],
      )}
    >
      {iconPosition === "leading" && icon}
      {children}
      {iconPosition === "trailing" && icon}
    </button>
  );
}
