import styled from "styled-components";
import { getMediaMobile } from "../../../utils/utils";

interface Props {
  color?: string;
}
export const CustomButton = styled.button<Props>`
  margin: 10px 0;
  background-color: ${(props) => props?.color || "#ff8b4d"};
  border-radius: 50px;
  height: 10vh;
  border: none;
  color: white;
  font-weight: 900;
  font-size: 30px;
  width: 45%;
  font-family: "Chango", cursive;
  min-width: 300px;
  &:hover {
    cursor: pointer;
  }
  ${getMediaMobile(`
width: 60vw;
`)}
`;
