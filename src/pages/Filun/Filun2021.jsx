import React, { useState } from "react";
import { useSpring } from "@react-spring/web";
import SEO from "components/SEO";
import FilunDay from "components/Filun/FilunDay/FilunDay";
import { schedule } from "data/filun";
import {
  FilunActivities,
  FilunActivitiesPDF,
  FilunContainer,
  FilunHero,
  FilunHeroColumn,
  FilunHeroImage,
  FilunTitle,
  FilunVideo,
  FilunVideos,
  FilunVideosContainer,
} from "./Filun2021.styles";

const Filun2021 = () => {
  const [videos] = useState([
    "https://www.facebook.com/publicaUSC/videos/542121233775366",
    "https://www.facebook.com/publicaUSC/videos/603183531047998",
    "https://www.facebook.com/publicaUSC/videos/560712868458684",
    "https://www.facebook.com/publicaUSC/videos/375871410817122",
    "https://www.facebook.com/publicaUSC/videos/219601166858889",
    "https://www.facebook.com/publicaUSC/videos/276316027637323",
  ]);

  const animationHeroImage = useSpring({
    to: { opacity: 1, transform: "translate(0px, 0px)" },
    from: { opacity: 0, transform: "translate(5vw, 0px)", transition: "0.25s" },
    delay: 1000,
  });

  const animationHeroTitle = useSpring({
    to: { opacity: 1, transition: "1s" },
    from: { opacity: 0 },
    delay: 1000,
  });

  return (
    <FilunContainer>
      <SEO
        title="III Feria del Libro Universitario - Universidad Santiago de Cali"
        description="Mujeres apasionadas por la ciencia e investigación que inspiran ConsCiencia.👩🏻‍💼 Te invitamos a hacer parte de la tercera edición de la Feria Internacional del Libro Universitario FILUN USC🎉"
      />
      <FilunHero>
        <FilunHeroColumn style={animationHeroTitle}>
          <FilunHeroImage
            src={"/images/filun2021/Filun-Titulo.png"}
            alt="III Feria del Libro Universitario"
          />
        </FilunHeroColumn>
        <FilunHeroColumn style={animationHeroImage}>
          <FilunHeroImage
            src={"/images/filun2021/Mujeres-FILUN.png"}
            alt="Mujeres apasionadas por la ciencia e investigación que inspiran ConsCiencia"
          />
        </FilunHeroColumn>
      </FilunHero>
      <FilunVideosContainer>
        <FilunTitle>Videos</FilunTitle>
        <FilunVideo
          url={"https://www.facebook.com/watch/?v=531637381432347"}
          width="90vw"
          height="100%"
        />
        <FilunVideos>
          {videos.map((video) => (
            <FilunVideo url={video} width="90vw" height="90%" key={video} />
          ))}
        </FilunVideos>
      </FilunVideosContainer>
      <FilunActivities>
        <FilunActivitiesPDF
          href="https://investigaciones.usc.edu.co/images/DGI/Sello/Cronograma_Filun_USC_2021-LRO.pdf"
          target="_blank"
          rel="noreferrer noopener"
        >
          Descarga el Cronograma
        </FilunActivitiesPDF>
        <FilunTitle>Cronograma</FilunTitle>
        {schedule.map((day) => (
          <FilunDay day={day} key={day.number} />
        ))}
      </FilunActivities>
    </FilunContainer>
  );
};

export default Filun2021;
