import { render, RenderResult } from "@testing-library/react";
import { Header } from "./Header";

describe("<Header/>", () => {
  const text = "Welcome header";
  let wrapper: RenderResult;
  beforeEach(() => {
    wrapper = render(<Header>{text}</Header>);
  });
  it("Should display the component", () => {
    const { getByText } = wrapper;

    const instance = getByText(text);

    expect(instance).toBeInTheDocument();
  });
});
