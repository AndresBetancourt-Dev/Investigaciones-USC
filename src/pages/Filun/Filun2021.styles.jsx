import styled from "styled-components";
import { animated } from "@react-spring/web";
import { Screen } from "../../styles";
import { FilunColors } from "../../data/filun";
import ReactPlayer from "react-player";

export const FilunContainer = styled.section`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  overflow: hidden;
`;

export const FilunHero = styled.section`
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

export const FilunHeroColumn = styled(animated.div)`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const FilunHeroImage = styled.img`
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

export const FilunVideosContainer = styled.section`
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

export const FilunVideos = styled.section`
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

export const FilunTitle = styled.h2`
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

export const FilunVideo = styled(ReactPlayer)`
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

export const FilunActivities = styled.section`
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

export const FilunActivitiesPDF = styled.a`
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
