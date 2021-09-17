
import styled from "styled-components";

interface Props {
  url: string;
}

export const NetworkImage = styled.div<Props>`
  background: url(${(props) => props.url}) no-repeat center center;
  background-size: cover;
`;
