import React from "react";
import styled, { css } from "styled-components";
import { GiWorld } from "react-icons/gi";

import { FilunColors } from "../../data/filun";
import { Screen, Shadows } from "../../styles";

const FilunActivityContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 28.5vw;
  height: auto;
  box-shadow: ${Shadows.light};
  padding: 1.5vh 1.5vw;

  @media (${Screen.tabletXL}) {
    width: 100%;
  }
`;

const FilunActivityType = styled.label`
  background: ${(props) => props.labelColor || FilunColors.purple};
  color: white;
  width: auto;
  padding: 1vw;
  font-weight: bold;
`;

const FilunActivityTitle = styled.h3`
  width: 100%;
  margin: 1em 1.5vw;

  font-size: 2vw;

  @media (${Screen.laptop}) {
    font-size: 2.5vw;
  }

  @media (${Screen.tabletXL}) {
    font-size: 3.5vw;
  }

  @media (${Screen.mobile}) {
    font-size: 6.5vw;
  }
`;

const FilunActivitySubtitle = styled.h4`
  width: 100%;
  margin: 1em 1.5vw;
  font-size: 1.25vw;

  @media (${Screen.laptop}) {
    font-size: 1.75vw;
  }

  @media (${Screen.tabletXL}) {
    font-size: 2.5vw;
  }

  @media (${Screen.mobile}) {
    font-size: 5vw;
  }
`;

const FilunActivityExample = styled.h5`
  width: 100%;
  margin: 1em 1.5vw;
  font-size: 1vw;

  @media (${Screen.laptop}) {
    font-size: 1.25vw;
  }

  @media (${Screen.tabletXL}) {
    font-size: 2vw;
  }

  @media (${Screen.mobile}) {
    font-size: 4vw;
  }
`;

const FilunActivityDescription = styled.div`
  & p {
    margin: 1em 1.5vw;
    width: 100%;
  }
`;

const FilunActivityTextFont = `
  font-size: 1vw;
  @media (${Screen.laptop}) {
    font-size: 1.25vw;
  }

  @media (${Screen.tabletXL}) {
    font-size: 2.5vw;
  }

  @media (${Screen.mobile}) {
    font-size: 3.5vw;
  }
`;

const FilunActivityText = styled.p`
  ${FilunActivityTextFont}
`;

const FilunActivityList = styled.ul`
  margin: 0;
  padding: 1.5vw;
`;

const FilunActivityListItem = styled.li`
  ${FilunActivityTextFont}
  width : 100%;

  &::marker {
    color: ${FilunColors.lightBlue};
  }
`;

const FilunActivityInfo = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin: 1em 1.5vw;
`;

const FilunActivityHour = styled.div`
  ${FilunActivityTextFont}
`;

const LinkStyles = css`
  box-shadow: ${Shadows.light};
  text-decoration: none;
  border-radius: 10px;
  padding: 1vw;
  text-align: center;
  display: flex;
  align-content: center;
  height: auto;
  line-height: 2.5vh;
  font-size: 1vw;
  cursor: pointer;
  background-color: ${FilunColors.lightBlue};
  color: white;
  font-weight: 500;
  ${FilunActivityTextFont}
`;
const FilunActivityMeet = styled.a`
  ${LinkStyles}
`;
const FilunActivityExternal = styled.a`
  ${LinkStyles}
`;

const FilunActivity = ({ activity }) => {
  const { label = "", labelColor = "" } = activity;
  const { title = "", subtitle = "" } = activity;
  const { example = "", description = "" } = activity;
  const { startHour = "", endHour = "" } = activity;
  const { meeting = "", externalUrl = "" } = activity;

  const renderDescription = (description) => {
    let type = typeof description;
    switch (type) {
      case "object":
        return (
          <FilunActivityList>
            {description.map((text) => (
              <FilunActivityListItem key={text}>{text}</FilunActivityListItem>
            ))}
          </FilunActivityList>
        );
      case "string":
      default:
        return <FilunActivityText>{description}</FilunActivityText>;
    }
  };

  return (
    <FilunActivityContainer>
      <FilunActivityType labelColor={labelColor}>{label}</FilunActivityType>
      <FilunActivityTitle>{title}</FilunActivityTitle>
      <FilunActivitySubtitle>{subtitle}</FilunActivitySubtitle>
      <FilunActivityExample>{example}</FilunActivityExample>
      <FilunActivityDescription>
        {renderDescription(description)}
      </FilunActivityDescription>
      <FilunActivityInfo>
        <FilunActivityHour>
          {startHour}
          {" - "}
          {endHour}
        </FilunActivityHour>
        <FilunActivityMeet
          href={meeting}
          target="_blank"
          rel="noreferrer noopener"
        >
          {"Ingresa aquí"}
        </FilunActivityMeet>
        {externalUrl && (
          <FilunActivityExternal
            href={externalUrl}
            target="_blank"
            rel="noreferrer noopener"
          >
            <GiWorld size={30} />
          </FilunActivityExternal>
        )}
      </FilunActivityInfo>
    </FilunActivityContainer>
  );
};

export default FilunActivity;
