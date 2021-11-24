import Loader from "components/Loader";
import { LayoutContext } from "context/LayoutContext";
import React, { useContext, useEffect, useState } from "react";
import { apiQuienesSomos } from "services/api/pages";
import PageLayout from "components/PageLayout/PageLayout";
import {
  UsTitle,
  UsSection,
  UsText,
  UsImage,
  UsContainer,
} from "./QuienesSomos.styles";

const initialUsContent = {
  header: [],
  organigrama: [],
  grupos: [],
  fortalecimiento: [],
  investigacion: [],
  content: "",
};

const UsContent = ({ theme, image, text, title, inverted }) => (
  <>
    <UsTitle theme={theme}>{title}</UsTitle>
    <UsSection inverted={inverted}>
      <UsText theme={theme}>{text}</UsText>
      <UsImage
        small={image[0]?.url}
        large={image[0]?.url}
        alt={image[0]?.alternativeText}
      />
    </UsSection>
  </>
);

const UsMainContent = ({ theme, us }) => (
  <>
    <UsContent
      theme={theme}
      image={us.organigrama}
      title={us.organigramaTitle}
      text={us.organigramaText}
    />
    <UsContent
      theme={"light"}
      image={us.grupos}
      title={us.gruposTitle}
      text={us.gruposText}
      inverted
    />
    <UsContent
      theme={theme}
      image={us.fortalecimiento}
      title={us.fortalecimientoTitle}
      text={us.fortalecimientoText}
    />
    <UsContent
      theme={"light"}
      image={us.investigacion}
      title={us.investigacionTitle}
      text={us.investigacionText}
      inverted
    />
  </>
);

const Us = () => {
  const [us, setUs] = useState(initialUsContent);

  const { loading, setLoading, theme } = useContext(LayoutContext);

  useEffect(() => {
    const getNormatividad = async () => {
      try {
        setLoading(true);
        let response = await apiQuienesSomos.getAll();
        setUs(response);
      } catch (error) {
        setUs(initialUsContent);
      }
      setLoading(false);
    };

    getNormatividad();
  }, [setLoading]);

  return (
    <PageLayout title={"Quiénes Somos"} theme={theme}>
      {loading ? (
        <Loader />
      ) : (
        <UsContainer theme={theme}>
          <UsMainContent theme={theme} us={us} />
        </UsContainer>
      )}
    </PageLayout>
  );
};

export default Us;
