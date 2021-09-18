import { render, RenderResult } from "@testing-library/react";
import { CardFooter } from "./CardFooter";

describe("<CardFooter/>", () => {
  const text = "Welcome footer";
  let wrapper: RenderResult;
  beforeEach(() => {
    wrapper = render(<CardFooter>{text}</CardFooter>);
  });
  it("Should display the component", () => {
    const { getByText } = wrapper;

    const instance = getByText(text);

    expect(instance).toBeInTheDocument();
  });
});
