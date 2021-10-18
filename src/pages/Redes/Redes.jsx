import Loader from "components/Loader";
import PageLayout from "components/PageLayout/PageLayout";
import SEO from "components/SEO";
import { LayoutContext } from "context/LayoutContext";
import { useContext, useEffect, useState } from "react";
import { apiRedes } from "services/api/redes";
import {
  RedesContainer,
  RedContainer,
  RedImage,
  RedLink,
} from "./Redes.styles";

const Red = ({ red: { title, image, url } }) => {
  return (
    <RedContainer>
      <RedLink
        href={url}
        target="_blank"
        title={title}
        rel="noreferrer noopener"
      >
        <RedImage src={image[0].url} alt={title} title={title} />
      </RedLink>
    </RedContainer>
  );
};

const Redes = () => {
  const [networks, setNetworks] = useState([]);
  const { loading, setLoading } = useContext(LayoutContext);

  useEffect(() => {
    const getRedes = async () => {
      try {
        setLoading(true);
        let response = await apiRedes.getAll();
        if (Array.isArray(response)) {
          setNetworks(response);
        } else {
          setNetworks([]);
        }
      } catch (error) {
        setNetworks([]);
      }
      setLoading(false);
    };

    getRedes();
  }, [setLoading]);

  return (
    <PageLayout title={"Redes"}>
      <SEO
        title="Redes - Dirección General de Investigaciones"
        description="La Dirección General de Investigaciones en esta página muestras las resoluciones y circulares normativas que han sido publicadas."
      />
      <RedesContainer>
        {loading ? (
          <Loader />
        ) : (
          networks.map((red) => <Red red={red} key={red._id} />)
        )}
      </RedesContainer>
    </PageLayout>
  );
};

export default Redes;
