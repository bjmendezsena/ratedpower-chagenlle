import { useEffect, useState } from 'react'
import { CardInterface, Fact } from '../interfaces/appInterfaces';
import { catService } from '../services/catService';

export const useCardsData = () => {
    const [data, setData] = useState<CardInterface[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    const [errorImages, images] = await catService.getCatImages();
    const [errorFacts, facts] = await catService.getFacts();

    if (!errorImages && !errorFacts) {
      const fetchedData: CardInterface[] = images.map((image, index) => {
        const { data = [] } = facts;
        const fact = data[index] as Fact;
        return {
          image: image,
          showMore: false,
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
    isLoading
  }
}
