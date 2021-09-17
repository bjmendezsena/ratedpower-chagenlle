import React, { ReactNode, useState } from "react";
import styled from "styled-components";
import { getMediaMobile } from "../../../utils/utils";
import { CardFooter } from "../../atoms/cardFooter/CardFooter";
import { CardBody } from "../../atoms/cardBody/CardBody";
import { TransparentButton } from "../../atoms/transparentButton/TransparentButton";
import { MoreInfoModal } from "../../atoms/moreInfoModal/MoreInfoModal";

const Container = styled.div`
  position: relative;
  height: fit-content;
  width: fit-content;
  float: left;
  margin: 2%;
  &::nth-child(4n) {
    margin-right: 0;
  }
  ${getMediaMobile("margin: 2% auto;")}
`;

const CardStyleContainer = styled.div`
  background-color: #fff;
  width: 300px;
  height: 300px;
  border-radius: 10px;
  box-shadow: 1px 2px 5px 0px rgba(0, 0, 0, 0.75);
  transition: 0.3s;
  display: grid;
  grid-template-rows: 50% 35% 15%;
  overflow: hidden;
  position: relative;
  font-family: "Roboto", sans-serif;
`;

export const Card: React.FC<{
  header?: ReactNode;
  body?: ReactNode;
  footer?: ReactNode;
}> = ({ body, header, children }) => {
  const [showMore, setShowMore] = useState(false);
  const onReadMoreClick = () => {
    setShowMore(!showMore);
  };
  return (
    <Container>
      <CardStyleContainer>
        {children ? (
          children
        ) : (
          <>
            {header}
            <CardBody>{body}</CardBody>
            <CardFooter>
              <TransparentButton onClick={onReadMoreClick}>READ MORE</TransparentButton>
            </CardFooter>
          </>
        )}
      </CardStyleContainer>
      {showMore ? <MoreInfoModal>{body}</MoreInfoModal> : null}
    </Container>
  );
};
