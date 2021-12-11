import { FILE_EXTENSIONS } from "constants/index";
import Loader from "components/Loader/Loader";
import PageLayout from "components/PageLayout/PageLayout";
import SEO from "components/SEO";
import { LayoutContext } from "context/LayoutContext";
import { useContext, useEffect, useState } from "react";
import { apiFormatos } from "services/api/formatos";
import { getFileExtension, lineBreak } from "utils";
import {
  FormatosContainer,
  FormatoContainer,
  FormatoImage,
  FormatoLink,
  FormatoTitle,
  FormatoDescription,
  FormatosSectionContainer,
  FormatosSectionTitle,
  FormatosWrapper,
} from "./Formatos.styles";
import { FormatoContent } from "./Formatos.styles";

const FormatoSection = ({ title, child }) => {
  return (
    <FormatosSectionContainer>
      <FormatosSectionTitle>{title}</FormatosSectionTitle>
      <FormatosWrapper>
        {child.map((format) => (
          <Formato
            key={format._id}
            title={format.title}
            url={format.document[0].url}
            description={format.description}
          />
        ))}
      </FormatosWrapper>
    </FormatosSectionContainer>
  );
};

const Formato = ({ title, url, description }) => {
  return (
    <FormatoContainer>
      <FormatoLink
        href={url}
        target="_blank"
        title={title}
        rel="noreferrer noopener"
      >
        <FormatoImage
          src={FILE_EXTENSIONS[getFileExtension(url)]}
          alt={title}
          title={title}
        />
        <FormatoContent>
          <FormatoTitle>{title}</FormatoTitle>
          {description ? (
            <FormatoDescription>{lineBreak(description)}</FormatoDescription>
          ) : null}
        </FormatoContent>
      </FormatoLink>
    </FormatoContainer>
  );
};

const Formatos = () => {
  const [formatos, setFormatos] = useState([]);
  const { loading, setLoading } = useContext(LayoutContext);

  useEffect(() => {
    const getFormatos = async () => {
      try {
        setLoading(true);
        let response = await apiFormatos.getAll();
        if (Array.isArray(response)) {
          setFormatos(response);
        } else {
          setFormatos([]);
        }
      } catch (error) {
        setFormatos([]);
      }
      setLoading(false);
    };

    getFormatos();
  }, [setLoading]);

  return (
    <PageLayout title={"Formatos"}>
      <SEO
        title="Formatos - Dirección General de Investigaciones"
        description="La Dirección General de Investigaciones en esta página muestras las resoluciones y circulares normativas que han sido publicadas."
      />
      <FormatosContainer>
        {loading ? (
          <Loader />
        ) : (
          formatos.map((section) => (
            <FormatoSection
              key={section._id}
              title={section.title}
              description={section.description}
              child={section.child}
            />
          ))
        )}
      </FormatosContainer>
    </PageLayout>
  );
};

export default Formatos;
