import { render, RenderResult } from "@testing-library/react";
import { CardGrid } from "./CardGrid";

describe("<CardGrid/>", () => {
  const text = "Random Cat Stuff";

  let wrapper: RenderResult;
  beforeEach(() => {
    wrapper = render(<CardGrid />);
  });
  it("Should display the component", () => {
    const { getByText } = wrapper;

    const instance = getByText(text);

    expect(instance).toBeInTheDocument();
  });
  it("Should display the shuffle button", () => {
    const { getByText } = wrapper;

    const instance = getByText('shuffle');

    expect(instance).toBeInTheDocument();
  });
});
