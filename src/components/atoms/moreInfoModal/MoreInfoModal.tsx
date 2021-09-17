import styled from "styled-components";
import { getMediaMobile } from "../../../utils/utils";

export const MoreInfoModal = styled.div`
background-color: #3696e5;
color: white;
font-family: "Roboto", sans-serif;
display: flex;
position: absolute;
left: 2vw;
border-end-end-radius: 10px;
border-bottom-left-radius: 10px;
border-top-right-radius: 10px;
top: 32vh;
padding: 5px 10px;
width: 400px;
z-index: 999;
${getMediaMobile("left: 5vw; top: 38vh; width: 280px;")}
`;