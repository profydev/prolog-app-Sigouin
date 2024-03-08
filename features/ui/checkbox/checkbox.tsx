import React, { InputHTMLAttributes } from "react";
// import styles from "./checkbox.module.scss";
// import classNames from "classnames";

export enum CheckboxSize {
  small = "small",
  medium = "medium",
}

type CheckboxProps = {
  label?: string;
  size?: CheckboxSize;
} & InputHTMLAttributes<HTMLInputElement>;

export function Checkbox({ label }: CheckboxProps) {
  return (
    <label>
      <input type="checkbox" />
      {label && <span>{label}</span>}
    </label>
  );
}
