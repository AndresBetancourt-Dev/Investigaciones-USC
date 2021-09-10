import React, { useState } from "react";
import ReactPlayer from "react-player";
import { useSpring, animated } from "@react-spring/web";
import styled from "styled-components";
import SEO from "../components/SEO";
import { Screen } from "../styles";
import { FilunColors, schedule } from "../data/filun";
import FilunDay from "../components/Filun/FilunDay";

const FilunContainer = styled.section`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  overflow: hidden;
`;

const FilunHero = styled.section`
  width: 100%;
  height: 100vh;
  display: flex;
  background-image: url("/images/filun2021/Fondo.png");
  background-repeat: no-repeat;
  background-size: cover;

  @media (${Screen.tablet}) {
    flex-direction: column;
    align-items: center;
  }
`;

const FilunHeroColumn = styled(animated.div)`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const FilunHeroImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  padding: 0;
  margin: 0;
  width: 50vw;
  height: 50vw;

  @media (${Screen.tablet}) {
    width: 70vw;
    height: 70vw;
  }
`;

const FilunVideosContainer = styled.section`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: linear-gradient(
    to bottom,
    ${FilunColors.whiten},
    ${FilunColors.lightPink}
  );
`;

const FilunVideos = styled.section`
  display: flex;
  width: 100%;
  height: auto;
  padding: 1.5vw;
  padding-left: 5vw;
  justify-content: center;
  align-items: center;
  background: transparent;

  overflow-x: scroll;

  @media (${Screen.mobile}) {
    flex-wrap: wrap;
    flex-direction: column;
    overflow-x: hidden;
    padding: 2vw 0.5vw;
  }

  &::-webkit-scrollbar {
    width: 1vw;
    border: none;
    box-shadow: none;
  }

  &::-webkit-scrollbar-track {
    background: transparent;
    border: none;
    box-shadow: none;
  }

  &::-webkit-scrollbar-thumb {
    background: linear-gradient(
      45deg,
      ${FilunColors.purple},
      ${FilunColors.pink},
      ${FilunColors.lightPink}
    );
    transition: 0.45s ease-in;
    border-radius: 1em;
    box-shadow: 2px 2px 40px ${FilunColors.lightPink};
  }

  &::-webkit-scrollbar-thumb:hover {
    transition: 0.45s ease-in;
    background: linear-gradient(
      270deg,
      ${FilunColors.purple},
      ${FilunColors.pink},
      ${FilunColors.lightPink}
    );
  }
`;

const FilunTitle = styled.h2`
  color: white;
  font-weight: bold;
  font-size: 4.5vw;
  text-shadow: 2px 2px 2px rgba(0, 0, 0, 0.5);

  @media (${Screen.tabletXL}) {
    font-size: 6.5vw;
  }

  @media (${Screen.mobile}) {
    font-size: 8.5vw;
  }
`;

const FilunVideo = styled(ReactPlayer)`
  width: 100%;

  & span {
    margin: 0 0.5vw;
  }

  & iframe {
    border-radius: 1em;
    width: 35vw;
  }

  @media (${Screen.mobile}) {
    & span {
      margin: 1vw 0;
    }
  }
`;

const FilunActivities = styled.section`
  width: 100%;
  height: auto;
  padding: 2.5vw 1vw;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  justify-content: center;
  align-items: center;
  position: relative;
  background: linear-gradient(
    25deg,
    ${FilunColors.purple},
    ${FilunColors.pink},
    ${FilunColors.lightPink},
    ${FilunColors.lightPink}
  );
`;

const FilunActivitiesPDF = styled.a`
  background: ${FilunColors.purple};
  box-shadow: 2px 2px 40px ${FilunColors.lightPink};
  text-shadow: 2px 2px 40px rgba(0, 0, 0, 0.75);
  color: white;
  font-weight: 600;
  border-radius: 1em;
  padding: 1em;
  text-align: center;
  text-decoration: none;
  cursor: pointer;
`;

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
