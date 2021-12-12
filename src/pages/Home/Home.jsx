import { Link } from "react-router-dom";
import Card from "components/Card";
import { CardImageTop } from "components/Card/Card";
import MenuBar from "components/MenuBar";
import SEO from "components/SEO";
import Slider from "components/Slider";
import { SliderHome } from "data/slider/SliderHome";
import { HomeContainer, HomeDetailedText, HomeSection } from "./Home.styles";

const Home = () => {
  const homeGrid = [
    {
      title: "Solicitudes",
      image: "/images/home/USC_Estatua-Entrada.webp",
      url: "/",
    },
    {
      title: "Oficina de Transferencia de Resultados de Investigaciones",
      image: "/images/home/USC_Bloque-3.webp",
      url: "/",
    },
    {
      title: "Editorial",
      image: "/images/home/USC_Night.webp",
      url: "/",
    },
  ];

  return (
    <HomeContainer>
      <SEO
        title="Dirección General de Investigaciones"
        description="La Dirección General de Investigaciones genera condiciones para favorecer los procesos investigativos y se encarga de coordinar la promoción, el desarrollo, el seguimiento y evaluación de la investigación."
      />
      <Slider slides={SliderHome} height={"87.5vh"}></Slider>
      <MenuBar />
      <HomeSection elementHeight={"32.5vh"}>
        <Card
          boxShadow="light"
          rounded="false"
          elementWidth="95%"
          elementHeight={"auto"}
        >
          La <HomeDetailedText>Universidad Santiago de Cali</HomeDetailedText>,
          consciente de su responsabilidad social en el aporte a la sociedad del
          conocimiento y en la formación integral de profesionales, fomenta la
          investigación en todo su ámbito y contribuye de esta forma al
          desarrollo de su entorno regional y nacional. <br />
          <br /> Enmarcada en los propósitos de la{" "}
          <HomeDetailedText>
            Política Nacional de ciencia y Tecnología
          </HomeDetailedText>{" "}
          definidos por <HomeDetailedText>Colciencias</HomeDetailedText> y
          articulada a las agendas regionales de{" "}
          <HomeDetailedText>Ciencia y Tecnología</HomeDetailedText> prioriza la
          investigación aplicada, sin obviar la investigación básica realizando
          esfuerzos por transitar de una universidad con investigación hacia una
          universidad científica. La{" "}
          <HomeDetailedText>Universidad Santiago de Cali</HomeDetailedText>{" "}
          organiza su actividad investigadora a través de diferentes
          estructuras. <br /> <br /> Entre ellas se pueden citar los{" "}
          <HomeDetailedText>
            Departamentos académicos, los Centros de Investigación y/o Estudio
            en las diferentes Facultades y los Grupos de Investigación
          </HomeDetailedText>
          constituidos en torno a determinadas Líneas de Investigación. <br />{" "}
          <br />
          La{" "}
          <HomeDetailedText>
            Dirección General de Investigaciones
          </HomeDetailedText>{" "}
          genera condiciones para favorecer los procesos investigativos y se
          encarga de coordinar la promoción, el desarrollo, el seguimiento y
          evaluación de la investigación.
          <HomeDetailedText>
            {" "}
            La Comisión Central de Investigaciones, COCEIN
          </HomeDetailedText>
          , es el órgano asesor universitario a cargo de la definición de las
          políticas científicas universitarias, entre otras muchas funciones.
        </Card>
      </HomeSection>
      <HomeSection elementHeight={"32.5vh"} padding={"2em"}>
        {homeGrid.map((homeColumn, i) => (
          <Card
            boxShadow="light"
            rounded="true"
            elementWidth={"30%"}
            elementHeight={"60vh"}
            mobileHeight={"auto"}
            mobileMaxHeight={"250px"}
            padding={"0"}
            key={i}
            hovereable
          >
            <Link
              to={homeColumn.url}
              aria-label={homeColumn.title}
              title={homeColumn.title}
            >
              <CardImageTop
                src={homeColumn.image}
                alt={homeColumn.title}
                rounded
                elementHeight={"100%"}
              ></CardImageTop>
            </Link>
          </Card>
        ))}
      </HomeSection>
    </HomeContainer>
  );
};

export default Home;
