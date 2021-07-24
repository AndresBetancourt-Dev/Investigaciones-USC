import styled from "styled-components";
import SEO from "../components/SEO";
import Slider from "../components/Slider";
import { SliderHome } from "../data/slider/SliderHome";

const HomeContainer = styled.section`
  width: 100%;
  height: 100%;
  min-height: 100vh;
  background-color: white;
`;

const Home = () => {
  return (
    <HomeContainer>
      <SEO
        title="Dirección General de Investigaciones"
        description="La Dirección General de Investigaciones genera condiciones para favorecer los procesos investigativos y se encarga de coordinar la promoción, el desarrollo, el seguimiento y evaluación de la investigación."
      />
      <Slider slides={SliderHome}></Slider>
      <Slider slides={SliderHome}></Slider>
      <Slider slides={SliderHome}></Slider>
    </HomeContainer>
  );
};

export default Home;
