import React, { useState } from "react";
import ReactPlayer from "react-player";
import { useSpring, animated } from "@react-spring/web";
import styled from "styled-components";
import { Screen } from "../styles";

// const pages = [
//   "https://scontent.fclo7-1.fna.fbcdn.net/v/t39.30808-6/241258547_1249618785508686_1056617974919817084_n.jpg?_nc_cat=108&ccb=1-5&_nc_sid=730e14&_nc_ohc=VVYvZMowdBcAX8PiV3G&_nc_ht=scontent.fclo7-1.fna&oh=ab22847379156148a0ace5e0fbb3a2ad&oe=6139D5FC",
//   "https://scontent.fclo7-1.fna.fbcdn.net/v/t39.30808-6/241260095_1249618888842009_5607415227835882923_n.jpg?_nc_cat=108&ccb=1-5&_nc_sid=730e14&_nc_ohc=ciD2Mt8NiRoAX_TbMJ3&_nc_ht=scontent.fclo7-1.fna&oh=ae2f2b2db3bad01c195ac7e130075151&oe=6138AD02",
//   "https://scontent.fclo7-1.fna.fbcdn.net/v/t39.30808-6/241288009_1249618978842000_5629747802065809435_n.jpg?_nc_cat=103&ccb=1-5&_nc_sid=730e14&_nc_ohc=dUxfHhqlbgsAX-nWW01&_nc_ht=scontent.fclo7-1.fna&oh=a3525d253dce4762039862a3a4e70a22&oe=61390692",
//   "https://scontent.fclo7-1.fna.fbcdn.net/v/t39.30808-6/241274763_1249619038841994_4077938623280102292_n.jpg?_nc_cat=101&ccb=1-5&_nc_sid=730e14&_nc_ohc=JQCBqcOwhVgAX_jUJyF&_nc_ht=scontent.fclo7-1.fna&oh=f70c05f9e4a8a9d7b6a32477ca314bfd&oe=613A1DF2",
// ];

const FilunColors = {
  lightPink: "#d9a2b4",
  pink: "#c675a7",
  whiten: "#d1c4c6",
  purple: "#7068bb",
};

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

const FilunTitle = styled.h3`
  color: white;
  font-weight: bold;
  font-size: 3.5vw;
  text-shadow: 2px 2px 2px rgba(0, 0, 0, 0.5);

  @media (${Screen.tablet}) {
    font-size: 6.5vw;
  }

  @media (${Screen.mobile}) {
    font-size: 7.5vw;
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
  height: 100vh;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  justify-content: center;
  align-items: center;
  background: linear-gradient(
    25deg,
    ${FilunColors.purple},
    ${FilunColors.pink},
    ${FilunColors.lightPink},
    ${FilunColors.lightPink}
  );
`;

const FilunDay = styled.div`
    width : 100%;
    height : auto;
    background : white;
    padding 1.5vw;
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
      <FilunHero>
        <FilunHeroColumn style={animationHeroTitle}>
          <FilunHeroImage src={"/images/filun2021/Titulo-FILUN.png"} />
        </FilunHeroColumn>
        <FilunHeroColumn style={animationHeroImage}>
          <FilunHeroImage src={"/images/filun2021/Mujeres-FILUN.png"} />
        </FilunHeroColumn>
      </FilunHero>
      <FilunVideosContainer>
        <FilunTitle>Videos</FilunTitle>
        <FilunVideos>
          {videos.map((video) => (
            <FilunVideo url={video} width="90vw" height="90%" key={video} />
          ))}
        </FilunVideos>
      </FilunVideosContainer>
      <FilunActivities>
        <FilunTitle>Cronograma</FilunTitle>
        <FilunDay></FilunDay>
      </FilunActivities>
    </FilunContainer>
  );
};

export default Filun2021;
