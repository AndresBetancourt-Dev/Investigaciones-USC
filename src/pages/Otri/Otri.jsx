import MenuBar from "components/MenuBar";
import SEO from "components/SEO";
import {
  OtriTitle,
  OtriImageContainer,
  OtriImage,
  OtriContainer,
} from "./Otri.styles";

const Otri = () => {
  return (
    <OtriContainer>
      <SEO
        title="OTRI - Dirección General de Investigaciones"
        description="La Dirección General de Investigaciones en esta página muestras las resoluciones y circulares normativas que han sido publicadas."
      />
      <OtriImageContainer>
        <OtriImage
          src="/images/otri/OTRI-Home.jpg"
          alt="Oficina de Transferencia de Resultados de Investigación"
        />
        <OtriTitle>
          Oficina de Transferencia de Resultados de Investigación
        </OtriTitle>
      </OtriImageContainer>
      <MenuBar page="OTRI" />
    </OtriContainer>
  );
};

export default Otri;
