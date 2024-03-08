import React from "react";
import { Meta, StoryFn } from "@storybook/react";
import { Button, ButtonColor, ButtonSize } from "./button";

export default {
  title: "UI/Button",
  component: Button,
  tags: ["autodocs"],
  parameters: {
    layout: "fullscreen",
  },
} as Meta<typeof Button>;

const Template: StoryFn<typeof Button> = ({
  size,
  color,
  children,
  ...args
}) => (
  <Button color={color} size={size} {...args}>
    {children}
  </Button>
);

export const Default = Template.bind({});
Default.args = {
  size: ButtonSize.md,
  color: ButtonColor.primary,
  children: "Button CTA",
};
export const Focused = Template.bind({});
Focused.args = {
  size: ButtonSize.md,
  color: ButtonColor.primary,
  children: "Focused Button",
  autoFocus: true,
};
export const Disabled = Template.bind({});
Disabled.args = {
  size: ButtonSize.md,
  color: ButtonColor.error,
  children: "Disabled Button",
  disabled: true,
};
export const withIcon = Template.bind({});
withIcon.args = {
  size: ButtonSize.md,
  color: ButtonColor.primary,
  children: "Button with Icon",
  icon: (
    <span role="img" aria-label="rocket">
      🚀
    </span>
  ),
  iconPosition: "leading",
};

Default.parameters = {
  viewMode: "docs",
};
