import styled from "styled-components";
import { getMediaMobile } from "../../../../utils/utils";

export const CardsContainer = styled.div`
  width: 55%;
  align-items: center;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  ${getMediaMobile("display:flex;width: 100%; flex-direction:column; ")}
`;
