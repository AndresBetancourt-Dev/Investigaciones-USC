import React from "react";
import styled, { css } from "styled-components";
import { FilunColors } from "../../data/filun";
import { Screen, Shadows } from "../../styles";
import FilunActivity from "./FilunActivity";

const background = css`
  background: linear-gradient(45deg, #625dcd, #a57cc2, #11b0de);
`;

const FilunDayContainer = styled.div`
    width : 100%;
    height : auto;
    background : white;
    padding 1.5vw;
    display : flex;
    gap : 3vw;
    flex-wrap : wrap;
`;

const FilunDayHeader = styled.div`
  width: 100%;
  height: auto;
  ${background};
  position: relative;
  display: flex;
  flex-direction: row-reverse;
  align-items: center;
  margin-bottom: 2em;

  @media (${Screen.mobile}) {
    flex-direction: column;
    align-items: flex-end;
  }
`;

const FilunDayTitle = styled.div`
  width: auto;
  height: auto;
  padding: 1em;
  background: white;
  position: absolute;
  bottom: -2em;
  left: 1em;
  box-shadow: ${Shadows.normal};
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;

  @media (${Screen.tablet}) {
    flex-wrap: wrap;
  }
`;

const FilunDayNumber = styled.span`
  color: ${FilunColors.lightBlue};
  width: 100%;
  font-size: 5vw;
  text-align: center;
  font-weight: bold;

  font-size: 4vw;

  @media (${Screen.laptop}) {
    font-size: 7.5vw;
  }

  @media (${Screen.tablet}) {
    width: 100%;
  }
`;

const FilunDayDate = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0 2em;

  @media (${Screen.tablet}) {
    width: 100%;
    margin: 0;
  }
`;

const FilunDayWeek = styled.span`
  color: ${FilunColors.lightBlue};

  font-size: 1.75vw;

  @media (${Screen.laptop}) {
    font-size: 2.25vw;
  }

  @media (${Screen.mobile}) {
    font-size: 4.5vw;
  }
`;

const FilunDayMonth = styled.span`
  color: ${FilunColors.lightBlue};
  font-weight: bold;

  font-size: 1.75vw;
  @media (${Screen.laptop}) {
    font-size: 2.25vw;
  }

  @media (${Screen.mobile}) {
    font-size: 4.5vw;
  }
`;

const FilunDaySlogan = styled.div`
  width: 50%;
  height: 100%;
  font-weight: bold;
  color: white;
  display: flex;
  flex-direction: column;
  padding: 2.5vh 1.5vw;
  text-align: right;
  justify-content: center;
`;

const FilunDaySloganTitle = styled.div`
  font-weight: bold;
  color: white;

  font-size: 1.75vw;
  @media (${Screen.laptop}) {
    font-size: 2.25vw;
  }

  @media (${Screen.tablet}) {
    font-size: 5vw;
  }
`;

const FilunDaySloganDescription = styled.div`
  font-weight: normal;
  color: white;

  font-size: 1vw;
  @media (${Screen.laptop}) {
    font-size: 2vw;
  }

  @media (${Screen.tablet}) {
    font-size: 3vw;
    align-items: center;
    justify-content: center;
  }
`;

const FilunDay = ({ day }) => {
  const { activities = [] } = day;
  const { number = "", weekDay = "", month = "" } = day;
  const { slogan = "", sloganDescription = "" } = day;

  return (
    <FilunDayContainer>
      <FilunDayHeader>
        <FilunDayTitle>
          <FilunDayNumber>{number}</FilunDayNumber>
          <FilunDayDate>
            <FilunDayWeek>{weekDay}</FilunDayWeek>
            <FilunDayMonth>{month}</FilunDayMonth>
          </FilunDayDate>
        </FilunDayTitle>
        <FilunDaySlogan>
          <FilunDaySloganTitle>{slogan}</FilunDaySloganTitle>
          <FilunDaySloganDescription>
            {sloganDescription}
          </FilunDaySloganDescription>
        </FilunDaySlogan>
      </FilunDayHeader>
      {activities.map((activity) => (
        <FilunActivity
          key={activity.title + activity.subtitle}
          activity={activity}
        />
      ))}
    </FilunDayContainer>
  );
};

export default FilunDay;
