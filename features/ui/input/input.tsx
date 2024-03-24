import React, { useState } from "react";
import styles from "./input.module.scss";

interface InputProps {
  value?: string;
  onChange?: (value: string) => void;
  placeholder?: string;
  disabled?: boolean;
  icon?: React.ReactNode;
  focused?: boolean;
  hint?: string;
  error?: boolean;
}

export function Input({
  value = "",
  onChange,
  placeholder = "",
  disabled = false,
  icon,
  focused: propFocused = false,
  hint,
  error,
}: InputProps) {
  const [focused, setFocused] = useState(propFocused);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (onChange) {
      onChange(event.target.value);
    }
  };

  return (
    <div className={`input-container ${focused ? "focused" : ""}`}>
      {icon && <div className="icon">{icon}</div>}
      <input
        type="text"
        value={value}
        onChange={handleChange}
        placeholder={placeholder}
        disabled={disabled}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
      />
      {error ? (
        <p className={styles.errorFont}>This is an error message.</p>
      ) : hint ? (
        <p className={styles.hintFont}>{hint}</p>
      ) : null}
    </div>
  );
}
