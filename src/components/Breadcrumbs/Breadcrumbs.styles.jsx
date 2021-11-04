import styled from "styled-components";
import { Link } from "react-router-dom";
import { Colors, Screen } from "styles";

export const BreadcrumbsContainer = styled.div`
  margin-left: 1em;
  display: flex;
  align-items: center;
`;

export const BreadcrumbLink = styled(Link)`
  font-size: 1vw;
  text-decoration: none;
  font-weight: 500;
  color: ${Colors.blue};

  @media (${Screen.tabletXL}) {
    font-size: 2vw;
  }

  @media (${Screen.mobile}) {
    font-size: 3vw;
  }

  &::after {
    content: "→";
    margin: 0 0.5em;
    font-weight: 900;
  }

  &:last-child::after {
    content: "";
  }
`;
