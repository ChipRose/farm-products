import React from "react";
import Button from "./Button";

export default {
  title: "Button",
  component: Button,
  argTypes: {
    children: {
      table: {
        category: "Main",
      },
      description: "Button label.",
    },
    type: {
      table: {
        category: "Main",
      },
      control: { type: "select" },
      description: "Button type.",
    },
    link: {
      table: {
        category: "Main",
      },
      description: "Href.",
    },
    active: {
      table: {
        category: "Boolean",
      },
      description: "Show if tab is active.",
    },
    variant: {
      table: {
        category: "Decorative",
      },
      control: { type: "select" },
      description: "Button view.",
    },
    width: {
      table: {
        category: "Decorative",
      },
      description: "Button width in px.",
    },
    onClick: {
      table: {
        category: "Event",
      },
      type: "func",
      action: true,
    },
  },
  args: {
    children: "Button",
  },
};

const Template = (args) => <Button {...args} />;

export const Default = Template.bind({});
Default.args = {};

export const WithWidth = Template.bind({});
WithWidth.args = {
  width: 260,
};

export const Tab = Template.bind({});
Tab.args = {
  variant: "tab",
};

export const ActiveTab = Template.bind({});
ActiveTab.args = {
  variant: "tab",
  active: true,
};

export const Link = Template.bind({});
Link.args = {
  variant: "link",
  // link: "/order",
};

Default.storyName = "Default";
WithWidth.storyName = "Width";
Tab.storyName = "Tab";
ActiveTab.storyName = "Active tab";
