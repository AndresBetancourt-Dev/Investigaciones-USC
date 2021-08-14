import React from "react";
import styled from "styled-components";
import { Colors, Screen } from "../styles";
import { lineBreak } from "../utils";

/* Styled Components */

const Director = styled.div`
  display: grid;
  grid-template-columns: 0.4fr 0.6fr;
  width: 100%;
  justify-content: center;
  align-items: center;

  @media (${Screen.mobile}) {
    grid-template-columns: 1fr;
  }
`;

const DirectorImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const DirectorInformation = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 1.5em;
`;

const DirectorTitle = styled.h2`
  text-align: center;
  font-size: 2vw;

  @media (${Screen.laptop}) {
    font-size: 3.5vw;
  }

  @media (${Screen.mobile}) {
    font-size: 5vw;
  }
`;

const DirectorSubtitle = styled.h4`
  text-align: center;
  font-size: 1.5vw;

  @media (${Screen.laptop}) {
    font-size: 3vw;
  }

  @media (${Screen.mobile}) {
    font-size: 4vw;
  }
`;

const DirectorContent = styled.div`
  padding: 1em;
  font-size: 90%;
  font-weight: 300;
  font-size: 1vw;

  @media (${Screen.laptop}) {
    font-size: 2vw;
  }

  @media (${Screen.mobile}) {
    font-size: 3.5vw;
  }
`;

const DirectorSubContent = styled.div`
  padding: 1em;
  font-size: 1em;
  font-weight: 300;
  font-size: 1vw;

  @media (${Screen.laptop}) {
    font-size: 2vw;
  }

  @media (${Screen.mobile}) {
    font-size: 3.5vw;
  }
`;

const DirectorContact = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  justify-items: center;
  font-size: 1vw;

  @media (${Screen.laptop}) {
    font-size: 2vw;
  }

  @media (${Screen.mobile}) {
    font-size: 3.5vw;
  }

  & a,
  &:is(*) {
    text-decoration: none;
    color: ${Colors.blue};
    font-weight: 900;
  }
`;

/* Functional Component */

const DirectorCard = ({
  image,
  title,
  subtitle,
  content,
  subcontent,
  phone,
  extension,
  cvlac,
}) => {
  return (
    <Director>
      <DirectorImage src={image} alt={title} rel="preload"></DirectorImage>
      <DirectorInformation>
        <DirectorTitle>{title}</DirectorTitle>
        <DirectorSubtitle>{subtitle}</DirectorSubtitle>
        <DirectorContent>{lineBreak(content)}</DirectorContent>
        <DirectorSubContent>{lineBreak(subcontent)}</DirectorSubContent>
        <DirectorContact>
          <a href={cvlac} target="_blank" rel="noreferrer">
            CvLAC
          </a>
          <div>{phone}</div>
          <div>{extension}</div>
        </DirectorContact>
      </DirectorInformation>
    </Director>
  );
};

export default DirectorCard;
