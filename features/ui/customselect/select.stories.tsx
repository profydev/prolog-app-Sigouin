import { Meta, StoryFn } from "@storybook/react";
import { CustomSelect } from "./customselect";
// import Select from "react-select";

export default {
  title: "UI/Select",
  component: CustomSelect,
  tags: ["autodocs"],
  parameters: {
    layout: "fullscreen",
  },
} as Meta<typeof CustomSelect>;

const Template: StoryFn<typeof CustomSelect> = () => (
  <div>
    <CustomSelect />
  </div>
);

export const Default = Template.bind({});
Default.args = {
  children: "Default Select",
};
