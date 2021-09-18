import styled from "styled-components";
import { getMediaMobile } from "../../../../utils/utils";

export const BgImgContainer = styled.div`
  margin: 0;
  min-height: 100vh;
  background: linear-gradient(
      rgba(255, 255, 255, 0.5),
      rgba(255, 255, 255, 0.5)
    ),
    url(https://i.pinimg.com/originals/92/a2/20/92a220cea5a4855cbd634d5d229146f9.jpg);
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  display: flex;
  align-items: center;
  flex-direction: column;
  ${getMediaMobile("padding: 10% 0;")}
`;
