import Loader from "components/Loader";
import { LayoutContext } from "context/LayoutContext";
import React, { useContext, useEffect, useState } from "react";
import { apiQuienesSomos } from "services/api/pages";
import styled from "styled-components";
import ModalImage from "react-modal-image";
import PageLayout from "components/PageLayout/PageLayout";
import { Colors, Screen } from "styles";

const UsContainer = styled.section`
  width: 100%;
  height: auto;
  display: flex;
  justify-content: center;
  flex-direction: column;
  background-color: ${(props) =>
    props.theme === "light" ? Colors.blue : Colors.white};
`;

const UsSection = styled.section`
  display: flex;
  width: 100%;
  flex-wrap: nowrap;
  @media (${Screen.tablet}) {
    flex-wrap: wrap;
  }
`;

const UsTitle = styled.h2`
  text-align: center;
  color: ${(props) => (props.theme === "light" ? Colors.white : Colors.blue)};
  padding: 0 1em;

  @media (min-width: 1050px) {
    font-size: 2.25vw;
  }
`;

const UsText = styled.span`
  display: flex;
  padding: 2em;
  align-items: center;
  justify-content: center;
  text-align: center;
  font-weight: 500;

  color: ${(props) => (props.theme === "light" ? Colors.white : Colors.blue)};
  @media (${Screen.tablet}) {
    width: 100%;
  }

  @media (min-width: 1050px) {
    font-size: 1.25vw;
  }
`;

const UsImage = styled(ModalImage)`
  width: 100%;
`;

const initialUsContent = {
  header: [],
  organigrama: [],
  grupos: [],
  fortalecimiento: [],
  investigacion: [],
  content: "",
};

const UsContent = ({ theme, image, text, title }) => (
  <>
    <UsTitle theme={theme}>{title}</UsTitle>
    <UsSection>
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
      theme={theme}
      image={us.grupos}
      title={us.gruposTitle}
      text={us.gruposText}
    />
    <UsContent
      theme={theme}
      image={us.fortalecimiento}
      title={us.fortalecimientoTitle}
      text={us.fortalecimientoText}
    />
    <UsContent
      theme={theme}
      image={us.investigacion}
      title={us.investigacionTitle}
      text={us.investigacionText}
    />
  </>
);

const Us = () => {
  const [us, setUs] = useState(initialUsContent);

  const { loading, setLoading, theme, setTheme } = useContext(LayoutContext);

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

  useEffect(() => {
    setTheme("light");

    return () => {
      setTheme("normal");
    };
  }, [setTheme]);

  return (
    <UsContainer theme={theme}>
      {loading ? (
        <Loader />
      ) : (
        <>
          <PageLayout theme={theme}>
            <UsMainContent theme={theme} us={us} />
          </PageLayout>
        </>
      )}
    </UsContainer>
  );
};

export default Us;
