import Select from "react-select";
import { useState } from "react";

type OptionType = {
  value: string;
  label: string;
};

type ValueType = OptionType | OptionType[] | null;

type CustomSelectProps = {
  label?: string;
  hint?: string;
  error?: string;
};

const names = [
  { value: "Olivia Rhye", label: "Olivia Rhye" },
  { value: "Phoenix Baker", label: "Phoenix Baker" },
  { value: "Lana Steiner", label: "Lana Steiner" },
  { value: "Demi Wilkinson", label: "Demi Wilkinson" },
  { value: "Candice Wu", label: "Candice Wu" },
  { value: "Natali Craig", label: "Natali Craig" },
  { value: "Drew Cano", label: "Drew Cano" },
];

export function CustomSelect({ label, hint, error }: CustomSelectProps) {
  const [isErrorShown, setIsErrorShown] = useState(false);

  const handleFocus = () => {
    setIsErrorShown(false);
  };

  const handleChange = (selectedOption: ValueType) => {
    if (!selectedOption) {
      setIsErrorShown(true);
    } else {
      setIsErrorShown(false);
    }
  };

  return (
    <div>
      <label>{label}</label>
      <Select
        placeholder="Select team member"
        options={names}
        className={isErrorShown ? "error" : ""}
        onFocus={handleFocus}
        onChange={handleChange}
      />
      {hint && !isErrorShown && <p className="hint">{hint}</p>}
      {error && <p className="error">{error}</p>}
    </div>
  );
}
