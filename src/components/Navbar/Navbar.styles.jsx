import styled, { css } from "styled-components";
import { Link } from "react-router-dom";
import { Screen } from "styles";

/* Styled Components */

export const NavbarList = styled.ul`
  list-style: none;
`;

export const NavbarItem = styled.li``;

export const commonLinkStyles = css`
  color: white;
  font-weight: bold;
  text-decoration: none;
  font-size: 3vw;
  margin: 0;
  padding: 0;
  letter-spacing: -2.5px;

  @media (${Screen.tablet}) {
    font-size: 7.5vw;
  }

  @media (${Screen.mobile}) {
    font-size: 10vw;
  }
`;

export const NavbarLink = styled(Link)`
  ${commonLinkStyles}
`;

export const NavbarButton = styled.button`
  ${commonLinkStyles}
  background : transparent;
  cursor: pointer;
  outline: none;
  border: none;
  font-family: "GT Walsheim Pro";
`;
