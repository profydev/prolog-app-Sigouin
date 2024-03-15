import { Meta, StoryFn } from "@storybook/react";
import { CustomSelect } from "./customselect";

export default {
  title: "UI/Select",
  component: CustomSelect,
  tags: ["autodocs"],
  parameters: {
    layout: "fullscreen",
  },
} as Meta<typeof CustomSelect>;

const Template: StoryFn<typeof CustomSelect> = (args) => (
  <div>
    <CustomSelect {...args} />
  </div>
);

export const Default = Template.bind({});
Default.args = {
  label: "",
  hint: "",
  error: "",
};
