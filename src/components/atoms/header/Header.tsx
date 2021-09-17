import styled from "styled-components";
import { getMediaMobile } from "../../../utils/utils";

export const Header = styled.div`
  font-family: "Chango", cursive;
  font-size: 5vh;
  color: #2B98F0;
  margin: 20px;
  ${getMediaMobile("font-size: 4vh;")}
`;
