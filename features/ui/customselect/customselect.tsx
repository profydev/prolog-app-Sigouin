// import Select from 'react-select'
import CreatableSelect from "react-select/creatable";

const names = [{ value: "Olivia Rhye", label: "Olivia" }];

// type SelectProps = {
//   children?: React.ReactNode;
// };

export function CustomSelect() {
  return (
    <div>
      <CreatableSelect options={names} />
    </div>
  );
}
