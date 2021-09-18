import { render, RenderResult } from "@testing-library/react";
import { MoreInfoModal } from "./MoreInfoModal";

describe("<MoreInfoModal/>", () => {
  let wrapper: RenderResult;
  const text = "Modal content";
  beforeEach(() => {
    wrapper = render(<MoreInfoModal>{text}</MoreInfoModal>);
  });
  it("Should display the component", () => {
    const { getByText } = wrapper;

    const instance = getByText(text);

    expect(instance).toBeInTheDocument();
  });
});
