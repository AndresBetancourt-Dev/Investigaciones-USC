import FilunActivity from "components/Filun/FilunActivity";
import {
  FilunDayContainer,
  FilunDayHeader,
  FilunDayTitle,
  FilunDayNumber,
  FilunDayDate,
  FilunDayWeek,
  FilunDayMonth,
  FilunDaySlogan,
  FilunDaySloganTitle,
  FilunDaySloganDescription,
} from "./FilunDay.styles";

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
