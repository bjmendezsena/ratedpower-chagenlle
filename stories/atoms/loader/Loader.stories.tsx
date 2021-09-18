import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Loader } from "../../../src/components/atoms/loader/Loader";

export default {
  title: "Components/Atoms",
  component: Loader,
} as ComponentMeta<typeof Loader>;

const Template: ComponentStory<typeof Loader> = (args) => <Loader {...args} />;

export const SpinnerLoader = Template.bind({});
SpinnerLoader.args = {
  color: "red",
};
