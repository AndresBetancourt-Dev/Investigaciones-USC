import styled, { css } from "styled-components";
import { FilunColors } from "data/filun";
import { Screen, Shadows } from "styles";

export const FilunActivityContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 28.5vw;
  height: auto;
  box-shadow: ${Shadows.light};
  padding: 1.5vh 1.5vw;

  @media (${Screen.tabletXL}) {
    width: 100%;
  }
`;

export const FilunActivityType = styled.label`
  background: ${(props) => props.labelColor || FilunColors.purple};
  color: white;
  width: auto;
  padding: 1vw;
  font-weight: bold;
`;

export const FilunActivityTitle = styled.h3`
  width: 100%;
  margin: 1em 1.5vw;

  font-size: 2vw;

  @media (${Screen.laptop}) {
    font-size: 2.5vw;
  }

  @media (${Screen.tabletXL}) {
    font-size: 3.5vw;
  }

  @media (${Screen.mobile}) {
    font-size: 6.5vw;
  }
`;

export const FilunActivitySubtitle = styled.h4`
  width: 100%;
  margin: 1em 1.5vw;
  font-size: 1.25vw;

  @media (${Screen.laptop}) {
    font-size: 1.75vw;
  }

  @media (${Screen.tabletXL}) {
    font-size: 2.5vw;
  }

  @media (${Screen.mobile}) {
    font-size: 5vw;
  }
`;

export const FilunActivityExample = styled.h5`
  width: 100%;
  margin: 1em 1.5vw;
  font-size: 1vw;

  @media (${Screen.laptop}) {
    font-size: 1.25vw;
  }

  @media (${Screen.tabletXL}) {
    font-size: 2vw;
  }

  @media (${Screen.mobile}) {
    font-size: 4vw;
  }
`;

export const FilunActivityDescription = styled.div`
  & p {
    margin: 1em 1.5vw;
    width: 100%;
  }
`;

export const FilunActivityTextFont = `
  font-size: 1vw;

  @media (${Screen.tabletXL}) {
    font-size: 2.5vw;
  }

  @media (${Screen.mobile}) {
    font-size: 3.5vw;
  }
`;

export const FilunActivityText = styled.p`
  ${FilunActivityTextFont}
`;

export const FilunActivityList = styled.ul`
  margin: 0;
  padding: 1.5vw;
`;

export const FilunActivityListItem = styled.li`
  ${FilunActivityTextFont}
  width : 100%;

  &::marker {
    color: ${FilunColors.lightBlue};
  }
`;

export const FilunActivityInfo = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin: 1em 1.5vw;
`;

export const FilunActivityHour = styled.div`
  ${FilunActivityTextFont}
`;

export const LinkStyles = css`
  box-shadow: ${Shadows.light};
  text-decoration: none;
  border-radius: 5px;
  padding: 0.5em;
  text-align: center;
  display: flex;
  align-content: center;
  height: auto;
  line-height: 2.5vh;
  cursor: pointer;
  background-color: ${FilunColors.lightBlue};
  color: white;
  font-weight: 500;

  font-size: 1vw;

  & svg {
    width: 1.5vw;
    height: 1.5vw;
  }

  @media (${Screen.laptopXL}) {
    & svg {
      width: 2vw;
      height: 2vw;
    }
  }

  @media (${Screen.tabletXL}) {
    font-size: 2.5vw;
    & svg {
      width: 4vw;
      height: 4vw;
    }
  }

  @media (${Screen.mobile}) {
    font-size: 3.5vw;

    & svg {
      width: 5vw;
      height: 5vw;
    }
  }
`;
export const FilunActivityMeet = styled.a`
  ${LinkStyles}
`;
export const FilunActivityExternal = styled.a`
  ${LinkStyles}
`;
