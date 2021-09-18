import { render, RenderResult } from "@testing-library/react";
import { Loader } from "./Loader";

describe("<Loader/>", () => {
  let wrapper: RenderResult;
  beforeEach(() => {
    wrapper = render(<Loader />);
  });
  it("Should display the component", () => {
    const { getByTestId } = wrapper;

    const instance = getByTestId("loader-tets-id");

    expect(instance).toBeInTheDocument();
  });
});
