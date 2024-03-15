import Select from "react-select";

const names = [
  { value: "Olivia Rhye", label: "Olivia Rhye" },
  { value: "Phoenix Baker", label: "Phoenix Baker" },
  { value: "Lana Steiner", label: "Lana Steiner" },
  { value: "Demi Wilkinson", label: "Demi Wilkinson" },
  { value: "Candice Wu", label: "Candice Wu" },
  { value: "Natali Craig", label: "Natali Craig" },
  { value: "Drew Cano", label: "Drew Cano" },
];

// type SelectProps = {
//   children?: React.ReactNode;
// };

export function CustomSelect() {
  return (
    <div>
      <label>Team member</label>
      <Select placeholder="Select team member" options={names} />
    </div>
  );
}
