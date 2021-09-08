import React from "react";
import styled from "styled-components";
import FilunActivity from "./FilunActivity";

const FilunDayContainer = styled.div`
    width : 100%;
    height : auto;
    background : white;
    padding 1.5vw;
    display : flex;
    gap : 3vw;
    flex-wrap : wrap;
`;

const FilunDay = ({ day }) => {
  const { activities = [] } = day;
  console.log(day.activities[0]);

  return (
    <FilunDayContainer>
      {activities.map((activity) => (
        <FilunActivity key={activity.title} activity={activity} />
      ))}
    </FilunDayContainer>
  );
};

export default FilunDay;
