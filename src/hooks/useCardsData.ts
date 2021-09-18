import { useEffect, useState } from "react";
import { CardInterface, Fact } from "../interfaces/appInterfaces";
import { catService } from "../services/catService";
import { getRandomArbitrary } from "../utils/utils";

export const useCardsData = () => {
  const [data, setData] = useState<CardInterface[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    const [errorImages, images] = await catService.getCatImages();
    const [errorFacts, facts] = await catService.getFacts();
    const randomNumber = getRandomArbitrary(0, images.length - 1);

    const dataImage = images.slice(randomNumber, randomNumber + 4);

    if (!errorImages && !errorFacts) {
      const fetchedData: CardInterface[] = dataImage.map((image, index) => {
        const { data = [] } = facts;
        const fact = data[index] as Fact;
        return {
          image: image,
          fact,
        };
      });
      setData(fetchedData);
      setIsLoading(false);
    }
  };

  const onClickShuffle = () => {
    setIsLoading(true);
    getData();
  };

  return {
    onClickShuffle,
    data,
    isLoading,
  };
};
