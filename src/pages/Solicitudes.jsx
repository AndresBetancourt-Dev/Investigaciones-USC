import { useState, useEffect, useContext } from "react";
import styled from "styled-components";
import Loader from "../components/Loader";
import PageLayout from "../components/PageLayout/PageLayout";
import SEO from "../components/SEO";
import { Tabs } from "../components/Tabs";
import { LayoutContext } from "../context/LayoutContext";
import { apiSolicitudes } from "../services/api/solicitudes";

/* Styled Components */

const FlexSolicitudes = styled.section`
  display: flex;
  width: 100%;
  height: auto;
  justify-content: center;
  padding: 1.5vw;

  @media (max-width: 500px) {
    flex-direction: column;
    align-items: center;
  }
`;

/* Functional Components */

const Solicitudes = () => {
  const [sections, setSections] = useState([]);
  const { loading, setLoading } = useContext(LayoutContext);

  useEffect(() => {
    const arrangeParents = (response) => {
      response.forEach((section) => {
        section.content = section.content.reduce((items, current) => {
          if (current.parent) {
            const parent = items.findIndex(
              (item) => item._id === current.parent
            );

            if (parent === -1) {
              return [...items, current];
            }

            if (Array.isArray(items[parent].child)) {
              items[parent].child.push(current);
            } else {
              items[parent].child = [];
              items[parent].child.push(current);
            }

            return [...items];
          }

          return [...items, current];
        }, []);
      });

      return response;
    };

    const getSolicitudes = async () => {
      try {
        setLoading(true);
        let response = await apiSolicitudes.getAll();
        if (Array.isArray(response)) {
          response = arrangeParents(response);
          setSections(response);
        } else {
          setSections([]);
        }
      } catch (error) {
        setSections([]);
      }
      setLoading(false);
    };

    getSolicitudes();
  }, [setLoading]);

  return (
    <PageLayout title={"Solicitudes"} image={"/images/common/owl.png"}>
      <SEO
        title="Solicitudes - Dirección General de Investigaciones"
        description="La Dirección General de Investigaciones ha defindo este espacio para realizar solicitudes en los diferentes proyectos, generación de conocimiento, solicitud de constancias, avales y para la participación en las diversas convocatorias."
      />

      <FlexSolicitudes>
        {loading ? <Loader /> : <Tabs sections={sections} redirect={"Home"} />}
      </FlexSolicitudes>
    </PageLayout>
  );
};

export default Solicitudes;
