import { render, RenderResult } from "@testing-library/react";
import { CardBody } from "./CardBody";

describe("<CardBody/>", () => {
  const text = "Welcome body";
  let wrapper: RenderResult;
  beforeEach(() => {
    wrapper = render(<CardBody>{text}</CardBody>);
  });
  it("Should display the component", () => {
    const { getByText } = wrapper;

    const instance = getByText(text);

    expect(instance).toBeInTheDocument();
  });
});
