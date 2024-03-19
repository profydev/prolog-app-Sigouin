import { Meta, StoryFn } from "@storybook/react";
import { CustomSelect } from "./customselect";

export default {
  title: "UI/Select",
  component: CustomSelect,
  argTypes: {
    label: { control: "text" },
    hint: { control: "text" },
    error: { control: "boolean" },
    disabled: { control: "boolean" },
  },
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
  label: "Team member",
  hint: "This is a hint text to help user.",
};
export const Disabled = Template.bind({});
Disabled.args = {
  disabled: true,
  label: "Team member",
  hint: "",
};

export const WithError = Template.bind({});
WithError.args = {
  ...Default.args,
  error: true,
};
