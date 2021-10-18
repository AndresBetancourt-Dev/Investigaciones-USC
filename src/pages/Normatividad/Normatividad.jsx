import SEO from "../../components/SEO";

import Resolution from "../../components/Normatividad/Resolution";
import PageLayout from "../../components/PageLayout/PageLayout";

import { useContext, useEffect, useState } from "react";
import Loader from "components/Loader";
import { LayoutContext } from "../../context/LayoutContext";
import { apiNormatividad } from "../../services/api/normatividad";
import {
  NormatividadCard,
  NormatividadContainer,
  NormatividadItem,
  NormatividadTitle,
} from "./Normatividad.styles";

const Normatividad = () => {
  const [normatividad, setNormatividad] = useState([]);

  const { loading, setLoading } = useContext(LayoutContext);

  useEffect(() => {
    const getNormatividad = async () => {
      try {
        setLoading(true);
        let response = await apiNormatividad.getAll();
        if (Array.isArray(response)) {
          setNormatividad(response);
        } else {
          setNormatividad([]);
        }
      } catch (error) {
        setNormatividad([]);
      }
      setLoading(false);
    };

    getNormatividad();
  }, [setLoading]);

  return (
    <PageLayout title={"Normatividad"} image={"/images/common/owl.png"}>
      <SEO
        title="Normatividad - Dirección General de Investigaciones"
        description="La Dirección General de Investigaciones en esta página muestras las resoluciones y circulares normativas que han sido publicadas."
      />

      {loading ? (
        <Loader />
      ) : (
        <NormatividadContainer>
          {normatividad.map((section) => (
            <NormatividadItem key={section._id}>
              <NormatividadTitle>{section.title}</NormatividadTitle>
              <NormatividadCard
                elementWidth={"80%"}
                rounded
                margin={"auto"}
                boxShadow="light"
                zIndex={"1"}
              >
                {section.data.map((resolution) => (
                  <Resolution
                    key={resolution._id}
                    title={resolution.title}
                    description={resolution.description}
                    url={resolution.document[0]?.url}
                  />
                ))}
              </NormatividadCard>
            </NormatividadItem>
          ))}
        </NormatividadContainer>
      )}
    </PageLayout>
  );
};

export default Normatividad;
