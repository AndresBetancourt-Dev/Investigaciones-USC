import {
  ResolutionLink,
  ResolutionContainer,
  ResolutionCircle,
  ResolutionTitle,
} from "./Resolution.styles";

const Resolution = ({ title, description, url }) => {
  return (
    <ResolutionLink
      href={url}
      target="_blank"
      title={title}
      rel="noreferrer noopener"
    >
      <ResolutionContainer>
        <ResolutionCircle />
        <ResolutionTitle>{title}</ResolutionTitle>
        <p>{description}</p>
      </ResolutionContainer>
    </ResolutionLink>
  );
};

export default Resolution;
