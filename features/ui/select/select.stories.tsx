import { Meta, StoryFn } from "@storybook/react";
import { Select } from "./select";

export default {
  title: "UI/Select",
  component: Select,
  tags: ["autodocs"],
  parameters: {
    layout: "fullscreen",
  },
} as Meta<typeof Select>;

const Template: StoryFn<typeof Select> = ({ children }) => (
  <div>
    <Select>{children}</Select>
  </div>
);

export const Default = Template.bind({});
Default.args = {
  children: "Default Select",
};
