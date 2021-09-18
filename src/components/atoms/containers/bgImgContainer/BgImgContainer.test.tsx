import { render, RenderResult } from "@testing-library/react";
import { BgImgContainer } from "./BgImgContainer";

describe("<BgImgContainer/>", () => {
  const text = "Welcome BgImgContainer";
  let wrapper: RenderResult;
  beforeEach(() => {
    wrapper = render(<BgImgContainer>{text}</BgImgContainer>);
  });
  it("Should display the component", () => {
    const { getByText } = wrapper;

    const instance = getByText(text);

    expect(instance).toBeInTheDocument();
  });
});
