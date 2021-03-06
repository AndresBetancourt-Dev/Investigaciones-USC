import styled, { css } from "styled-components";
import { Link } from "react-router-dom";
import { Screen } from "styles";

export const ButtonStyles = css`
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

export const NormalButton = styled.a`
  ${ButtonStyles}
`;

export const LinkButton = styled(Link)`
  ${ButtonStyles}
`;
