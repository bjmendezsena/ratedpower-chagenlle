export const getMediaMobile = (style:string = "", maxWidth:string = "750") => `
    @media (max-width: ${maxWidth}px) {
        ${style};
    }
    `;
