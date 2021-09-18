import { render, RenderResult } from "@testing-library/react";
import { CardsContainer } from "./CardsContainer";

describe("<CardsContainer/>", () => {
  const text = "Welcome CardsContainer";
  let wrapper: RenderResult;
  beforeEach(() => {
    wrapper = render(<CardsContainer>{text}</CardsContainer>);
  });
  it("Should display the component", () => {
    const { getByText } = wrapper;

    const instance = getByText(text);

    expect(instance).toBeInTheDocument();
  });
});
