import styled from "styled-components";
import { Colors, Screen, Shadows } from "styles";

export const TabContainer = styled.div`
  width: 100%;
  height: auto;
  min-height: 500px;
  background: white;
  display: flex;
  box-shadow: ${Shadows.light};

  @media (${Screen.tabletXL}) {
    flex-direction: column;
  }

  @media (${Screen.mobile}) {
    min-height: 0;
  }
`;

export const TabBar = styled.aside`
  width: 20%;
  height: 100%;
  background: white;
  z-index: 10;

  @media (${Screen.tabletXL}) {
    width: 100%;
    height: auto;
  }
`;

export const TabContentContainer = styled.section`
  height: auto;
  width: 80%;
  background: white;

  @media (${Screen.tabletXL}) {
    width: 100%;
    height: 100%;
  }

  @media (${Screen.mobile}) {
    padding: 1.5em;
  }
`;

export const TabList = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  flex-wrap: wrap;

  @media (${Screen.tabletXL}) {
    width: 100%;
    flex-wrap: nowrap;
  }
`;

export const TabItem = styled.li`
  width: 100%;
  height: auto;
  background: white;
  cursor: pointer;
  color: ${Colors.blue};
  text-align: center;
  box-shadow: ${Shadows.light};
  transition: 0.3s ease-in;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1em;

  &.active {
    background: ${Colors.blue};
    color: white;
    font-weight: bold;
  }

  &:hover {
    transform: scale(1.015, 1.015);
    font-weight: bold;
  }

  @media (${Screen.tabletXL}) {
    flex-direction: column;
  }

  @media (${Screen.mobile}) {
    padding: 0.75em;
    justify-content: center;
  }
`;

export const TabItemImage = styled.img`
  width: 30%;

  @media (${Screen.mobile}) {
    width: 70%;
  }
`;

export const TabItemTitle = styled.h2`
  width: 80%;
  text-align: center;
  font-size: 1.5vw;
  padding: 0;
  margin: 0;

  @media (${Screen.mobile}) {
    font-size: 2vw;
  }
`;
