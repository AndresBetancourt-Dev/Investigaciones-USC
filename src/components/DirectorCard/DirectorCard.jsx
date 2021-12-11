import { lineBreak } from "utils";
import {
  Director,
  DirectorImage,
  DirectorInformation,
  DirectorTitle,
  DirectorSubtitle,
  DirectorContent,
  DirectorSubContent,
  DirectorContact,
} from "./DirectorCard.styles";

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
