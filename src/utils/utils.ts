export const getMediaMobile = (
  style: string = "",
  maxWidth: string = "750"
) => `
    @media (max-width: ${maxWidth}px) {
        ${style};
    }
    `;

export const getRandomArbitrary = (min: number, max: number): number => {
  return Math.round(Math.random() * (max - min) + min);
};
