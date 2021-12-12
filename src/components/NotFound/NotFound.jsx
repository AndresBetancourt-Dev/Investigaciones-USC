import PageLayout from "components/PageLayout";
import SEO from "components/SEO";
import Button from "components/Button";

import Image from "assets/images/stock/USC-Fountain.png";

import {
  NotFoundContentContainer,
  NotFoundContent,
  NotFoundImage,
  NotFoundTitle,
  NotFoundTitleContainer,
} from "./NotFound.styles";

const NotFoundContainer = ({ redirect, message, url }) => {
  return (
    <NotFoundContentContainer>
      <NotFoundContent>
        <NotFoundImage src={Image} />
        <NotFoundTitleContainer>
          <NotFoundTitle>{message}</NotFoundTitle>
          <Button type={"normal"} fontWeight={900} to={url}>
            {redirect}
          </Button>
        </NotFoundTitleContainer>
      </NotFoundContent>
    </NotFoundContentContainer>
  );
};

const NotFound = ({ redirect, message, type, url }) => {
  switch (type) {
    case "fragment":
      return (
        <NotFoundContainer
          redirect={redirect}
          message={message}
          type={type}
          url={url}
        />
      );
    case "page":
    default:
      return (
        <PageLayout elementHeight="15vh">
          <SEO
            title="Página No Encontrada - Dirección General de Investigaciones"
            description="La Dirección General de Investigaciones ha defindo este espacio para realizar solicitudes en los diferentes proyectos, generación de conocimiento, solicitud de constancias, avales y para la participación en las diversas convocatorias."
          />
          <NotFoundContainer
            redirect={redirect}
            message={message}
            type={type}
            url={url}
          />
        </PageLayout>
      );
  }
};

/* Default Props */

NotFound.defaultProps = {
  type: "page",
  message: "Lo sentimos, la página no ha sido encontrada.",
  redirect: "Home",
  url: "/",
};

export default NotFound;
