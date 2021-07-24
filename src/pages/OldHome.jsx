import styled from "styled-components";
import { Button } from "../components/Button";
import { Card } from "../components/Card";
import DirectorCard from "../components/DirectorCard";
import { HeaderState } from "../components/Header";
import SEO from "../components/SEO";
import { useComponentWillMount } from "../hooks";

const MAIN_URL =
  "https://investigaciones.usc.edu.co/index.php/direccion-general-de-investgaciones";

const HomeContainer = styled.section`
  padding: 1em;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const GridButtonsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 0.25em;
  margin-bottom: 1em;

  @media (max-width: 500px) {
    grid-template-columns: 1fr;
  }
`;

const ColumnButtonsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.25em;
`;

const gridButtons = [
  {
    title: "Quiénes Somos",
    link: `${MAIN_URL}/quienes-somos`,
  },
  {
    title: "Normatividad",
    link: `${MAIN_URL}/normatividad`,
  },
  {
    title: "Centros",
    link: `${MAIN_URL}/centros-de-estudios-e-investigaciones`,
  },
  {
    title: "Nuestras Redes",
    link: `${MAIN_URL}/nuestras-redes`,
  },
  {
    title: "Nuestras Cifras",
    link: `${MAIN_URL}/nuestras-cifras`,
  },
  {
    title: "Convocatorias",
    link: `${MAIN_URL}/convocatorias`,
  },
];

const OldHome = () => {
  useComponentWillMount(() => {
    HeaderState.fixed = false;
    HeaderState.showMenu = false;
  });

  return (
    <HomeContainer>
      <SEO
        title="Dirección General de Investigaciones"
        description="La Dirección General de Investigaciones genera condiciones para favorecer los procesos investigativos y se encarga de coordinar la promoción, el desarrollo, el seguimiento y evaluación de la investigación."
      />

      <Card>
        <GridButtonsContainer>
          {gridButtons.map(({ title, link }) => (
            <Button href={link} target="_blank" rel="noreferrer">
              {title}
            </Button>
          ))}
        </GridButtonsContainer>
        <ColumnButtonsContainer>
          <Button
            href={`${MAIN_URL}/solicitudes`}
            target="_blank"
            rel="noreferrer"
          >
            Solicitudes
          </Button>
          <Button
            href={`${MAIN_URL}/formatos`}
            target="_blank"
            rel="noreferrer"
          >
            Lista de Formatos
          </Button>
          <Button
            href="https://convocatoriasdgi.usc.edu.co/login"
            target="_blank"
            rel="noreferrer"
          >
            Sistema de Investigación
          </Button>
        </ColumnButtonsContainer>
      </Card>

      <Card>
        La Universidad Santiago de Cali, consciente de su responsabilidad social
        en el aporte a la sociedad del conocimiento y en la formación integral
        de profesionales, fomenta la investigación en todo su ámbito y
        contribuye de esta forma al desarrollo de su entorno regional y
        nacional. Enmarcada en los propósitos de la Política Nacional de ciencia
        y Tecnología definidos por Colciencias y articulada a las agendas
        regionales de Ciencia y Tecnología prioriza la investigación aplicada,
        sin obviar la investigación básica realizando esfuerzos por transitar de
        una universidad con investigación hacia una universidad científica. La
        USC organiza su actividad investigadora a través de diferentes
        estructuras. Entre ellas se pueden citar los Departamentos académicos,
        los Centros de Investigación y/o Estudio en las diferentes Facultades y
        los Grupos de Investigación constituidos en torno a determinadas Líneas
        de Investigación. La Dirección General de Investigaciones genera
        condiciones para favorecer los procesos investigativos y se encarga de
        coordinar la promoción, el desarrollo, el seguimiento y evaluación de la
        investigación. La Comisión Central de Investigaciones, COCEIN, es el
        órgano asesor universitario a cargo de la definición de las políticas
        científicas universitarias, entre otras muchas funciones.
      </Card>

      <Card>
        <DirectorCard
          image={
            "https://investigaciones.usc.edu.co/images/DGI/claudia-zuniga-canon.jpg"
          }
          title="PhD. Claudia Liliana Zúñiga Cañón"
          subtitle="Directora General de Investigaciones"
          content={`M.S. y Doctorado en Ingeniería Telemática (Universidad de Vigo, España).Ingeniera de Sistemas y Telemática (Universidad Santiago de Cali)`}
          subcontent={`Directora: direccioninvestigaciones@usc.edu.co
                Asistente: Investiga@usc.edu.co
                Secretaria: secretariadgi@usc.edu.co`}
          cvlac="http://scienti.colciencias.gov.co:8081/cvlac/visualizador/generarCurriculoCv.do?cod_rh=0000304786"
          phone="PBX: 5183000"
          extension="Ext: 413"
        />
      </Card>

      <Card>
        Claudia Liliana Zúñiga-Cañón recibió su M.S. y Doctorado en Ingeniería
        Telemática por la Universidad de Vigo (España). Es Ingeniera de Sistemas
        y Telemática de la USC. Es Profesor Titular en la Facultad de Ingeniería
        de la Universidad Santiago de Cali y Directora del Laboratorio de
        Computación Móvil COMBA I+D. Zúñiga fue reelegida como la Presidenta del
        Capítulo IEEE Computer Society para Colombia y es la actual Coordinadora
        de la Red de Universidades para la Innovación del Valle del Cauca RUPIV.
        Ha sido Profesora Visitante en la Universidad de Oulu (Finlandia), la
        Universidad UABC (México), la Universidad de Tianjin (China) y la
        Universidad de Aarhus (Dinamarca). Zúñiga tiene más de 10 años de
        experiencia en el campo de la computación ubicua. Ha trabajado en
        proyectos internacionales sobre arquitectura y diseño de plataformas
        ubicuas. En 2017, recibió el Premio IEEE WIE como Voluntaria
        Internacional y el Premio como Graduada Distinguida USC. Zúñiga es par
        evaluador COLCIENCIAS y speaker en varias conferencias del mundo. Lidera
        actividades de I+D en proyectos multidisciplinares. Investigadora
        Principal del Proyecto CAMoN financiado por OrganiCity-Unión
        Europea-Horizonte2020, Co-líder de la Red Temática CITIES financiada por
        CYTED y Co-Investigadora Principal del Proyecto MVC financiado por
        AHRC-Reino Unido 2018-2021. Miembro del comité directivo “Global
        Innovation Exchange on Virtual Reality and Visualization” para América y
        Asia.
      </Card>
    </HomeContainer>
  );
};

export default OldHome;
