import styled from "styled-components";
import { getMediaMobile } from "../../../utils/utils";

export const CustomButton = styled.button`
  margin: 10px 0;
  background-color: #ff8b4d;
  border-radius: 50px;
  height: 10vh;
  border: none;
  color: white;
  font-weight: 900;
  font-size: 30px;
  width: 45vw;
  font-family: "Chango", cursive;
  min-width: 300px;
  &:hover {
    cursor: pointer;
  }
  ${getMediaMobile(`
width: 60vw;
`)}
`;
