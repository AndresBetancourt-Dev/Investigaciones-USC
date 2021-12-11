import styled from "styled-components";
import { Link } from "react-router-dom";
import { Colors, Screen } from "styles";

/* Styled Components */

export const TabContentList = styled.ul`
  background: white;
  margin: 0;
  padding: 1.5vw;
  padding-left: 5vw;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-bottom: 1vw;
`;

export const TabContentItemStyles = `
  color: ${Colors.blue};
  font-weight: bold;
  font-size: 1.25vw;
  margin-bottom : 0.25vw;

  @media (${Screen.tabletXL}) {
    font-size: 2vw;
    margin-bottom : 1vw;
  }

  @media (${Screen.mobile}) {
    font-size: 3vw;
    margin-bottom : 1.5vw;
  }
`;

export const TabContentListItem = styled.li`
  ${TabContentItemStyles}
`;

export const TabContentLink = styled(Link)`
  text-decoration: none;
  ${TabContentItemStyles}
`;
