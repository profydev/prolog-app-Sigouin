import Select, {
  SingleValueProps,
  OptionProps,
  StylesConfig,
  components,
} from "react-select";
import { useState } from "react";
import styles from "./customselect.module.scss";

type OptionType = {
  value: string;
  label: string;
  icon?: React.ReactNode;
};

interface CustomSelectProps {
  label?: string;
  hint?: string;
  disabled?: boolean;
  error?: boolean;
  icon?: React.ReactNode;
}

const options = [
  { value: "Olivia Rhye", label: "Olivia Rhye", icon: "" },
  { value: "Phoenix Baker", label: "Phoenix Baker" },
  { value: "Lana Steiner", label: "Lana Steiner" },
  { value: "Demi Wilkinson", label: "Demi Wilkinson" },
  { value: "Candice Wu", label: "Candice Wu" },
  { value: "Natali Craig", label: "Natali Craig" },
  { value: "Drew Cano", label: "Drew Cano" },
];

const { Option, SingleValue } = components;

const CustomSelectOption = (props: OptionProps<OptionType>) => (
  <Option {...props}>
    <div style={{ position: "relative" }}>
      {props.data.icon && (
        <span style={{ marginRight: "8px" }}>{props.data.icon}</span>
      )}
      {props.data.label}
      {props.isSelected && (
        <span
          style={{
            position: "absolute",
            right: "8px",
            top: "50%",
            transform: "translateY(-50%)",
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
          >
            <path
              d="M16.6668 5L7.50016 14.1667L3.3335 10"
              stroke="#7F56D9"
              stroke-width="1.66667"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </span>
      )}
    </div>
  </Option>
);

const CustomSelectValue = (props: SingleValueProps<OptionType>) => (
  <SingleValue {...props}>
    {props.data.icon && (
      <span style={{ marginRight: "8px" }}>{props.data.icon}</span>
    )}
    {props.data.label}
  </SingleValue>
);

export function CustomSelect({
  label,
  hint,
  disabled,
  error,
}: CustomSelectProps) {
  const [selectedOption, setSelectedOption] = useState<OptionType | null>(null);

  const handleChange = (newValue: OptionType | null) => {
    setSelectedOption(newValue);
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
          value={selectedOption}
          onChange={handleChange}
          options={options}
          placeholder="Select team member"
          styles={customStyles}
          isDisabled={disabled}
          components={{
            Option: CustomSelectOption,
            SingleValue: CustomSelectValue,
          }}
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
