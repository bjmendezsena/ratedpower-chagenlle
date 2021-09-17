import { CardsContainer } from "../../atoms/containers/CardsContainer";
import { CustomButton } from "../../atoms/customButton/CustomButton";
import { NetworkImage } from "../../atoms/imageContainer/ImageContainer";
import { Card } from "../../molecules/card/Card";
import { Header } from "../../atoms/header/Header";
import styled from "styled-components";

const image = "https://cataas.com/cat?width=500";

const MainStyledComponent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const CardsComponent = () => {
  return (
    <MainStyledComponent>
      <Header>Random Cat Stuff</Header>
      <CardsContainer>
        <Card
          header={<NetworkImage url={image} />}
          body={
            <span>
              Hola Buenos días. Quisiera hacer un parrafo de texto (es la bajada
              de una noticia) que tenga espacio para poner 4 lineas de texto. Lo
              que necesito es que el texto muestre puntos suspensivos si la
              cantidad de caracteres supera esas 4 lineas. No se si se entendió.
            </span>
          }
        />
        <Card
          header={<NetworkImage url={image} />}
          body={
            <span>
              Hola Buenos días. Quisiera hacer un parrafo de texto (es la bajada
              de una noticia) que tenga espacio para poner 4 lineas de texto. Lo
              que necesito es que el texto muestre puntos suspensivos si la
              cantidad de caracteres supera esas 4 lineas. No se si se entendió.
            </span>
          }
        />
        <Card
          header={<NetworkImage url={image} />}
          body={
            <span>
              Hola Buenos días. Quisiera hacer un parrafo de texto (es la bajada
              de una noticia) que tenga espacio para poner 4 lineas de texto. Lo
              que necesito es que el texto muestre puntos suspensivos si la
              cantidad de caracteres supera esas 4 lineas. No se si se entendió.
            </span>
          }
        />
        <Card
          header={<NetworkImage url={image} />}
          body={
            <span>
              Hola Buenos días. Quisiera hacer un parrafo de texto (es la bajada
              de una noticia) que tenga espacio para poner 4 lineas de texto. Lo
              que necesito es que el texto muestre puntos suspensivos si la
              cantidad de caracteres supera esas 4 lineas. No se si se entendió.
            </span>
          }
        />
      </CardsContainer>
      <CustomButton>shuffle</CustomButton>
    </MainStyledComponent>
  );
};
