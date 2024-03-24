import { Meta, StoryFn } from "@storybook/react";
import { Input } from "./input";

export default {
  title: "UI/Input",
  component: Input,
  tags: ["autodocs"],
  parameters: {
    layout: "fullscreen",
  },
} as Meta<typeof Input>;

const Template: StoryFn<typeof Input> = (args) => <Input {...args} />;

export const Default = Template.bind({});
Default.args = {
  placeholder: "Enter text...",
};

export const Filled = Template.bind({});
Filled.args = {
  value: "Hello, world!",
};

export const Disabled = Template.bind({});
Disabled.args = {
  value: "This input is disabled",
  disabled: true,
};

export const WithError = Template.bind({});
WithError.args = {
  ...Default.args,
  error: true,
};

export const WithIcon = Template.bind({});
WithIcon.args = {
  placeholder: "Enter text...",
  icon: (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width="24"
      height="24"
    >
      <path d="M0 0h24v24H0z" fill="none" />
      <path d="M19 6.41L17.59 5 7.59 15 9 16.41L19 6.41zM17.59 19L15 16.41 5.59 7 2.41 3.84 3.84 2.41 7 5.59 16.41 15 19 17.59 17.59 19zM14.13 15l-1.4-1.4 2.3-2.29-1.3-1.3-2.29 2.29L9.7 11.3l-1.29 1.3L9.7 14.88 8.3 16.29l1.3 1.3 2.29-2.3L13.71 15l.72-.71zM18 18h-1v-1l4-4 1 1v1h-1v2h-2v-2l-2-2-1.29 1.29L16 17h-2v-1.17l1.29-1.29L14 14l-2-2V9h2L18 12v1z" />
    </svg>
  ),
};
