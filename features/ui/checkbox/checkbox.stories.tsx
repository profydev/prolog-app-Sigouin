import React from "react";
import { Meta, StoryFn } from "@storybook/react";
import { Checkbox } from "./checkbox";

export default {
  title: "UI/Checkbox",
  component: Checkbox,
  tags: ["autodocs"],
  parameters: {
    layout: "fullscreen",
  },
} as Meta<typeof Checkbox>;

const Template: StoryFn<typeof Checkbox> = ({ size }) => (
  <div>
    <Checkbox size={size} />
  </div>
);

export const Default = Template.bind({});

Default.parameters = {
  viewMode: "docs",
};
