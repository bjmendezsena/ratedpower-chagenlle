import { AppContainer } from './components/atoms/containers/AppContainer';
import { CustomButton } from './components/atoms/customButton/CustomButton';
import { NetworkImage } from "./components/atoms/imageContainer/ImageContainer";
import { CardsComponent } from "./components/organisms/cardsComponent/CardsComponent";

const App = () => {
  return (
    <AppContainer>
      <CardsComponent />
    </AppContainer>
  );
};
export default App;
