import PageLayout from "components/PageLayout";
import SEO from "components/SEO";
import Tabs from "components/Tabs";
import { convocatorias } from "data/convocatorias";
import { useEffect, useState } from "react";
import {
  ConvocatoriasSection,
  ConvocatoriasContainer,
} from "./Convocatorias.styles";

const Convocatorias = () => {
  const [sections, setSections] = useState([]);
  useEffect(() => {
    const arrangeSections = () => {
      let arrangedSections = convocatorias.reduce((map, convocatoria) => {
        let year = new Date(convocatoria.date).getFullYear();
        if (map.has(year)) {
          let currentConvocatorias = map.get(year);
          map.set(year, [...currentConvocatorias, convocatoria]);
        } else {
          map.set(year, [convocatoria]);
        }
        return map;
      }, new Map());

      arrangedSections = [...arrangedSections].map((section) => {
        const [year, convocatorias] = section;

        return {
          _id: year,
          title: year,
          image: "",
          content: convocatorias,
        };
      });

      arrangedSections = arrangedSections.sort((current, next) =>
        Number(current.title) > Number(next.title) ? -1 : 1
      );

      setSections(arrangedSections);
    };

    arrangeSections();
  }, []);

  return (
    <PageLayout title={"Convocatorias"}>
      <SEO
        title="Convocatorias - Dirección General de Investigaciones"
        description="La Dirección General de Investigaciones en esta página muestras las resoluciones y circulares normativas que han sido publicadas."
      />
      <ConvocatoriasContainer>
        <ConvocatoriasSection>
          <Tabs sections={sections} routing={false} type={"image"} />
        </ConvocatoriasSection>
      </ConvocatoriasContainer>
    </PageLayout>
  );
};

export default Convocatorias;
