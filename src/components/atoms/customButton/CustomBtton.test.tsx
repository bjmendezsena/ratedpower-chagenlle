import { render, RenderResult, fireEvent } from "@testing-library/react";
import { CustomButton } from "./CustomButton";

describe("<CustomButton/>", () => {
  const text = "Welcome CustomButton";
  let wrapper: RenderResult;

  const handleClick = jest.fn();
  beforeEach(() => {
    wrapper = render(<CustomButton onClick={handleClick}>{text}</CustomButton>);
  });
  it("Should display the component", () => {
    const { getByText } = wrapper;

    const instance = getByText(text);

    expect(instance).toBeInTheDocument();
  });

  it("Should click button", () => {
    const { getByText } = wrapper;

    const instance = getByText(text);
    fireEvent.click(instance);

    expect(handleClick).toBeCalled();
  });
});
