import Select, { StylesConfig } from "react-select";
import { useState } from "react";
import styles from "./customselect.module.scss";

type OptionType = {
  value: string;
  label: string;
};

type CustomSelectProps = {
  label?: string;
  hint?: string;
  disabled?: boolean;
  error?: boolean;
  icon?: React.ReactNode;
};

const names: OptionType[] = [
  { value: "Olivia Rhye", label: "Olivia Rhye" },
  { value: "Phoenix Baker", label: "Phoenix Baker" },
  { value: "Lana Steiner", label: "Lana Steiner" },
  { value: "Demi Wilkinson", label: "Demi Wilkinson" },
  { value: "Candice Wu", label: "Candice Wu" },
  { value: "Natali Craig", label: "Natali Craig" },
  { value: "Drew Cano", label: "Drew Cano" },
];

export function CustomSelect({
  label,
  hint,
  disabled,
  error,
}: CustomSelectProps) {
  const [selectedOption, setSelectedOption] = useState<OptionType | null>(null);

  const handleChange = (option: OptionType | null) => {
    setSelectedOption(option);
  };

  const customStyles: StylesConfig<OptionType, false> = {
    option: (defaultStyles, { isSelected, isFocused }) => ({
      ...defaultStyles,
      color: "#101828",
      backgroundColor: isSelected ? "#FCFAFF" : "transparent",
      "&:active": {
        backgroundColor: "transparent",
      },
      ...(isFocused && { backgroundColor: "#FCFAFF" }),
    }),
    control: (defaultStyles, { isFocused, isDisabled }) => ({
      ...defaultStyles,
      fontSize: "1rem",
      fontWeight: "400",
      width: "20rem",
      borderRadius: "0.5rem",
      borderColor: isFocused
        ? "#D6BBFB"
        : isDisabled
          ? "#D0D5DD"
          : error
            ? "#FDA29B"
            : "#D0D5DD",
      backgroundColor: isDisabled ? "#f2f2f2" : defaultStyles.backgroundColor,

      boxShadow: isFocused
        ? "0px 0px 0px 4px #f4ebff, 0px 1px 2px 0px rgba(16, 24, 40, 0.05)"
        : isDisabled
          ? "none"
          : error
            ? "0px 0px 0px 4px #FEE4E2, 0px 1px 2px 0px rgba(16, 24, 40, 0.05)"
            : "0px 1px 2px 0px rgba(16, 24, 40, 0.05)",
      "&:hover": {
        borderColor: isFocused
          ? "#D6BBFB"
          : isDisabled
            ? "#D0D5DD"
            : error
              ? "#FDA29B"
              : "#D6BBFB",
      },
    }),
    indicatorSeparator: () => ({
      border: "none",
    }),
    menu: () => ({
      width: "20rem",
      borderRadius: "0.5rem",
      boxShadow:
        "0px 4px 6px -2px rgba(16, 24, 40, 0.05), 0px 12px 16px -4px rgba(16, 24, 40, 0.10);",
    }),
    menuList: () => ({
      width: "20rem",
    }),
    dropdownIndicator: (defaultStyles, { selectProps }) => ({
      ...defaultStyles,
      color: "#667085",
      transform: selectProps.menuIsOpen ? "rotate(180deg)" : "rotate(0deg)",
    }),
  };

  return (
    <div>
      <label className={styles.labelFont}>
        {label}
        <Select
          className={styles.select}
          defaultValue={selectedOption}
          onChange={handleChange}
          options={names}
          placeholder="Select team member"
          styles={customStyles}
          isDisabled={disabled}
        />
        {error ? (
          <p className={styles.errorFont}>Error message goes here</p>
        ) : hint ? (
          <p className={styles.hintFont}>{hint}</p>
        ) : null}
      </label>
    </div>
  );
}
