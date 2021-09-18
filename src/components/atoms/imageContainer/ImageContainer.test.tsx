import { render, RenderResult } from "@testing-library/react";
import { NetworkImage } from "./ImageContainer";

describe("<NetworkImage/>", () => {
  let wrapper: RenderResult;
  beforeEach(() => {
    wrapper = render(<NetworkImage url="https://cataas.com/cat?uniqueNum=2" />);
  });
  it("Should display the component", () => {
    const { container } = wrapper;

    expect(container).toBeInTheDocument();
  });
});
