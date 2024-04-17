import { useState } from "react";
import classNames from "classnames";
import styles from "./input.module.scss";

interface InputProps {
  className?: string;
  type: "text" | "number" | "email" | "password";
  label?: string;
  value?: string;
  placeholder?: string;
  disabled?: boolean;
  icon?: string;
  focused?: boolean;
  hint?: string;
  error?: boolean;
  callbackFn?: (value: string) => void;
}

export function Input({
  className,
  placeholder = "",
  disabled = false,
  icon,
  hint,
  error,
  label,
  callbackFn,
  ...props
}: InputProps) {
  const [projectName, setProjectName] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setProjectName(e.target.value);

    if (callbackFn) callbackFn(e.target.value);
  };

  return (
    <label className={styles.label} data-error={error} data-disabled={disabled}>
      {label}
      <span className={classNames(styles.inputContainer, className)}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        {icon && <img src={icon} alt="" className={styles.inputIcon} />}
        <input
          {...props}
          value={projectName}
          onChange={handleChange}
          placeholder={placeholder}
          disabled={disabled}
          className={styles.input}
        />
        {error && (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src="/icons/error-alert.svg"
            alt="Error"
            className={styles.errorIcon}
          />
        )}
      </span>
      {error ? (
        <p className={styles.error}>This is an error message.</p>
      ) : hint ? (
        <p className={styles.hint}>{hint}</p>
      ) : null}
    </label>
  );
}
