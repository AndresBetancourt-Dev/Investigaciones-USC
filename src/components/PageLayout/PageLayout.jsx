import React from "react";
import styled from "styled-components";
import { Colors, Screen } from "../../styles";

const PageLayoutContainer = styled.section`
  width: 100%;
  height: auto;
`;

const PageLayoutHeader = styled.section`
  width: 100%;
  height: ${(props) => props.elementHeight};
  background: ${(props) => {
    switch (props.type) {
      case "image":
        return `url('${props.background}');
  background-size : 100% 100%;
  background-repeat : no-repeat;`;
      case "color":
      default:
        return `${Colors.blue}`;
    }
  }};
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 2vw;
  position: relative;

  @media (${Screen.mobile}) {
    flex-wrap: wrap;
    height: 10vh;
  }

  @media (${Screen.mobileHorizontal}) {
    height: auto;
  }
`;

const PageLayoutTitle = styled.h1`
  text-align: center;
  width: 50%;
  font-size: 6vw;
  color: ${(props) => props.textColor};
  @media (${Screen.mobile}) {
    width: 100%;
  }
`;

PageLayoutHeader.defaultProps = {
  elementHeight: "20vh",
};

PageLayoutTitle.defaultProps = {
  textColor: "white",
};

const PageLayout = ({ background, type, title, children }) => {
  return (
    <PageLayoutContainer>
      <PageLayoutHeader background={background} type={type}>
        <PageLayoutTitle>{title}</PageLayoutTitle>
      </PageLayoutHeader>
      {children}
    </PageLayoutContainer>
  );
};

PageLayout.defaultProps = {
  background: "/images/common/investigaciones-header-page.png",
  type: "color",
};

export default PageLayout;
