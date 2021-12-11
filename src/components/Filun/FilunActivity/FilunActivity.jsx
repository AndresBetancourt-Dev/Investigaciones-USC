import { GiWorld } from "react-icons/gi";
import {
  FilunActivityContainer,
  FilunActivityExample,
  FilunActivityInfo,
  FilunActivityMeet,
  FilunActivityExternal,
  FilunActivityHour,
  FilunActivityDescription,
  FilunActivitySubtitle,
  FilunActivityTitle,
  FilunActivityType,
  FilunActivityText,
  FilunActivityListItem,
  FilunActivityList,
} from "./FilunActivity.styles";

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
      {subtitle && <FilunActivitySubtitle>{subtitle}</FilunActivitySubtitle>}
      {example && <FilunActivityExample>{example}</FilunActivityExample>}
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
            aria-label={title}
          >
            <GiWorld size={30} />
          </FilunActivityExternal>
        )}
      </FilunActivityInfo>
    </FilunActivityContainer>
  );
};

export default FilunActivity;
