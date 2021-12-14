import styled, { css } from "styled-components";
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

export const TabContentImages = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  width: 100%;
  align-items: center;
  justify-content: center;
  padding: 1.5vw;
`;

export const TabContentImageContainer = styled.div`
  position: relative;
  background: ${Colors.blue};
  margin: 0.25em;
`;

export const TabContentImage = styled.img`
  width: 100%;
  object-fit: cover;
`;

export const TabContentImageTitle = styled.p`
  font-size: 1vw;
  padding: 1em;
  text-align: left;
  color: white;
  font-weight: bold;

  @media (${Screen.tabletXL}) {
    font-size: 2.5vw;
    margin-bottom: 1vw;
  }
`;

export const TabContentListItem = styled.li`
  ${TabContentItemStyles}
`;

const TabContentLinkImageStyles = css`
  width: 30%;
  height: 100%;

  @media (${Screen.tablet}) {
    width: 45%;
  }
`;

export const TabContentLink = styled(Link)`
  ${(props) => (props.type === "image" ? TabContentLinkImageStyles : "")}

  text-decoration: none;
  ${TabContentItemStyles}
`;
