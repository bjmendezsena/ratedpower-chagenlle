import { ComponentStory, ComponentMeta } from "@storybook/react";
import { CustomButton } from "../../../src/components/atoms/customButton/CustomButton";

export default {
  title: "Components/Atoms",
  component: CustomButton,
} as ComponentMeta<typeof CustomButton>;

const Template: ComponentStory<typeof CustomButton> = (args) => (
  <CustomButton {...args} />
);

export const ShuffleButton = Template.bind({});

ShuffleButton.args = {
  children: "shufle",
  color: "#ff8b4d",
};
