import { render, RenderResult } from "@testing-library/react";
import { Card } from "./Card";

describe("<Card/>", () => {
  const text = "Welcome CardBody";

  const data = {
    fact: {
      fact: text,
      id: "123456",
    },
    image: {
      created_at: "12-12-2021",
      id: "14578",
      tags: [],
    },
  };
  let wrapper: RenderResult;
  beforeEach(() => {
    wrapper = render(<Card cardInfo={data} isLoading={false} />);
  });
  it("Should display the component", () => {
    const { getByText } = wrapper;

    const instance = getByText(text);

    expect(instance).toBeInTheDocument();
  });
});
