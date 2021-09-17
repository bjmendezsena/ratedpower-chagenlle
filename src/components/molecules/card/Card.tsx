import React, { useEffect, useMemo, useState } from "react";
import styled from "styled-components";
import { getMediaMobile } from "../../../utils/utils";
import { CardFooter } from "../../atoms/cardFooter/CardFooter";
import { CardBody } from "../../atoms/cardBody/CardBody";
import { TransparentButton } from "../../atoms/transparentButton/TransparentButton";
import { MoreInfoModal } from "../../atoms/moreInfoModal/MoreInfoModal";
import { NetworkImage } from "../../atoms/imageContainer/ImageContainer";
import { CardInterface } from "../../../interfaces/appInterfaces";
import { Loader } from "../../atoms/loader/Loader";
import { useCard } from "../../../hooks/useCard";

const Container = styled.div`
  position: relative;
  height: fit-content;
  width: fit-content;
  float: left;
  margin: 2vh;
  &::nth-child(4n) {
    margin-right: 0;
  }
  ${getMediaMobile("margin: 2% auto;")}
`;

const CardStyleContainer = styled.div`
  background-color: #fff;
  width: 270px;
  height: 270px;
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
  cardInfo: CardInterface;
  isLoading: boolean;
}> = ({ cardInfo, isLoading }) => {
  const {
    body,
    randomId,
    text,
    isMoreThanCent,
    showMoreClicked,
    onClickReadMore,
  } = useCard(cardInfo);

  return (
    <Container>
      <CardStyleContainer>
        {isLoading ? (
          <Loader />
        ) : (
          <>
            <NetworkImage url={`https://cataas.com/cat?id=${randomId}`} />

            <CardBody>
              <p dangerouslySetInnerHTML={{ __html: body }}></p>
            </CardBody>
            <CardFooter>
              {isMoreThanCent ? (
                <TransparentButton onClick={onClickReadMore}>
                  READ MORE
                </TransparentButton>
              ) : null}
            </CardFooter>
          </>
        )}
      </CardStyleContainer>
      {showMoreClicked && !isLoading ? <MoreInfoModal>{text}</MoreInfoModal> : null}
    </Container>
  );
};
