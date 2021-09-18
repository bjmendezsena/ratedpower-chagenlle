import styled, { keyframes } from "styled-components";

import { FunctionComponent, CSSProperties } from "react";

const spinAimation = keyframes`
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
`;
//rgba(0, 0, 0, 0.1)

interface Props {
  color?: string;
}
const Spinner = styled.div<Props>`
  border: 4px solid ${(props) => props?.color || "rgba(0, 0, 0, 0.1)"};
  width: 36px;
  height: 36px;
  border-radius: 50%;
  border-left-color: transparent;

  animation-name: ${spinAimation};
  animation-duration: 1s;
  animation-iteration-count: infinite;
  animation-timing-function: linear;
`;

const SpinnerContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Loader: FunctionComponent<{ color?: string }> = ({ color }) => {
  return (
    <SpinnerContainer data-testid="loader-tets-id">
      <Spinner color={color} />
    </SpinnerContainer>
  );
};
