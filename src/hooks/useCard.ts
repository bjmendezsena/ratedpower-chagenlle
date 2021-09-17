import { useEffect, useMemo, useState } from "react";
import { CardInterface } from "../interfaces/appInterfaces";

export const useCard = (cardInfo: CardInterface) => {
  const [showMoreClicked, setShowMoreClicked] = useState(false);
  const { fact } = cardInfo;

  const text = fact.fact;

  const isMoreThanCent = text.length > 100;

  const body = isMoreThanCent ? text.substring(0, 100).concat("...") : text;

  const randomId = useMemo(() => {
    return Math.random();
  }, [cardInfo]);

  useEffect(() => {
    if (showMoreClicked) {
      setTimeout(() => {
        setShowMoreClicked(false);
      }, 3000);
    } 
  }, [showMoreClicked]);

  const onClickReadMore = () => {
    if (!showMoreClicked) {
      setShowMoreClicked(true);
    }
  };

  return {
    body,
    randomId,
    text,
    isMoreThanCent,
    showMoreClicked,
    onClickReadMore,
  };
};
