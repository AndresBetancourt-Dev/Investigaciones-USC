import { useState, useEffect, useContext, useLayoutEffect } from "react";
import { LayoutContext } from "context/LayoutContext";
import Loader from "components/Loader";
import PageLayout from "components/PageLayout";
import SEO from "components/SEO";
import Tabs from "components/Tabs";
import { apiSolicitudes } from "services/api/solicitudes";
import { FlexSolicitudes } from "./Solicitudes.styles";

const Solicitudes = () => {
  const [sections, setSections] = useState([]);
  const { loading, setLoading } = useContext(LayoutContext);

  useLayoutEffect(() => {
    setLoading(true);
  }, [setLoading]);

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
