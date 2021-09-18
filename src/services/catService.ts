import { CatImage } from "../interfaces/appInterfaces";
export const catService = {
  getCatImages: async (): Promise<[any, CatImage[]]> => {
    try {
      const response = await fetch("https://cataas.com/api/cats").then(
        (resp) => resp.json()
      );
      return [null, response as CatImage[]];
    } catch (error) {
      return [error, []];
    }
  },
  getFacts: async () => {
    try {
      const response = await fetch("https://catfact.ninja/facts?limit=4").then(
        (resp) => resp.json()
      );
      return [null, response];
    } catch (error) {
      return [error, null];
    }
  },
};
