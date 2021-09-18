import { render, fireEvent, RenderResult } from "@testing-library/react";
import { TransparentButton } from "./TransparentButton";

describe("<TransparentButton/>", () => {
  let wrapper: RenderResult;
  const text = "Click me";
  const handleClick = jest.fn();
  beforeEach(() => {
    wrapper = render(
      <TransparentButton onClick={handleClick}>{text}</TransparentButton>
    );
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
