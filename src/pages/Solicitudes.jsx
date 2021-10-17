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
      response = response.map((section) => {
        section.content = section.content.map((listItem, index, collection) => {
          if (listItem.parent) {
            const parent = collection.find(
              (item) => item._id === listItem.parent
            );

            if (parent === undefined) {
              return listItem;
            }

            if (Array.isArray(parent?.child)) {
              parent.child.push(listItem);
            } else {
              parent.child = [];
              parent.child.push(listItem);
            }
            return null;
          }
          return listItem;
        });

        section.content = section.content.filter((item) => item !== null);

        return section;
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
