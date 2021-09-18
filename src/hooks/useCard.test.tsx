import { renderHook, act } from "@testing-library/react-hooks";
import { useCard } from "./useCard";

const loren = `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`;

const getResult = (text: string) => {
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
  const { result } = renderHook(() => useCard(data));

  return result;
};

describe("useCard()", () => {
  const text = "Hello world";

  let result: any;

  beforeEach(() => {
    result = getResult(text);
  });

  it("Should return the text", () => {
    expect(text).toBe(result.current.body);
  });
  it("Text is more than 100", () => {
    const hookResult = getResult(loren);
    expect(hookResult.current.isMoreThanCent).toBeTruthy();
  });

  it("onClickShowMore is clicked", () => {
    act(() => result.current.onClickReadMore());

    expect(result.current.showMoreClicked).toBeTruthy();
  });
});
