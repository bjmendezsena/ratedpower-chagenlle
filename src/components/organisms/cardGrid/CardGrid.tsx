import { CardsContainer } from "../../atoms/containers/cardsContainer/CardsContainer";
import { CustomButton } from "../../atoms/customButton/CustomButton";
import { Card } from "../../molecules/card/Card";
import { Header } from "../../atoms/header/Header";
import styled from "styled-components";
import React from "react";
import { useCardsData } from "../../../hooks/useCardsData";

const MainStyledComponent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const CardGrid = () => {
  const { data, isLoading, onClickShuffle } = useCardsData();

  return (
    <MainStyledComponent>
      <Header>Random Cat Stuff</Header>
      <CardsContainer>
        {React.Children.toArray(
          data.map((cardInfo) => (
            <Card isLoading={isLoading} cardInfo={cardInfo} />
          ))
        )}
      </CardsContainer>
      <CustomButton onClick={onClickShuffle}>shuffle</CustomButton>
    </MainStyledComponent>
  );
};
