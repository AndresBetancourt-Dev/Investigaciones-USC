import { Link } from "react-router-dom";
import styled, { css } from "styled-components";
import { Colors, Screen } from "../styles";

/* Styled Components */

const ButtonStyles = css`
  background-color: ${(props) => props.background};
  color: ${(props) => props.color};
  text-decoration: none;
  cursor: pointer;
  text-align: center;
  font-size: 1vw;
  font-weight: ${(props) => props.fontWeight};
  padding: 1em;
  box-shadow: 1px 1px 10px rgba(0, 0, 0, 0.5);
  transition: 0.5s ease-in;
  width: 100%;

  @media (${Screen.laptop}) {
    font-size: 2vw;
  }

  @media (${Screen.mobile}) {
    font-size: 4vw;
  }
`;

const NormalButton = styled.a`
  ${ButtonStyles}
`;

const LinkButton = styled(Link)`
  ${ButtonStyles}
`;

/* Functional Component */

export const Button = ({
  type,
  background,
  color,
  fontWeight,
  children,
  to,
}) => {
  switch (type) {
    case "normal":
      return (
        <NormalButton
          background={background}
          color={color}
          fontWeight={fontWeight}
          href={to}
        >
          {children}
        </NormalButton>
      );
    case "link":
    default:
      return (
        <LinkButton
          background={background}
          color={color}
          fontWeight={fontWeight}
          to={to}
        >
          {children}
        </LinkButton>
      );
  }
};

/* Default Props */

Button.defaultProps = {
  background: Colors.blue,
  color: "white",
  fontWeight: 300,
};
