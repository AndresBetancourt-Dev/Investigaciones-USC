import styled from "styled-components";
import { Colors, Screen } from "../styles";

/* Styled Components */

export const Button = styled.a`
  background-color: ${(props) => props.background};
  color: ${(props) => props.color};
  text-decoration: none;
  text-align: center;
  font-size: 1vw;
  font-weight: 300;
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

/* Default Props */

Button.defaultProps = {
  background: Colors.blue,
  color: "white",
};
