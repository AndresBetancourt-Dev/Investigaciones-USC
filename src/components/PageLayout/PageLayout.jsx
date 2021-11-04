import styled from "styled-components";
import { useHistory } from "react-router-dom";
import { Colors, Screen } from "../../styles";
import { FaArrowAltCircleLeft } from "react-icons/fa";
import Breadcrumbs from "../Breadcrumbs/Breadcrumbs";

/* Styled Components */

const PageLayoutContainer = styled.section`
  width: 100%;
  height: auto;
  padding-bottom: 1em;
`;

const PageLayoutHeader = styled.section`
  width: 100%;
  height: ${(props) => props.elementHeight};
  background: ${(props) => {
    switch (props.type) {
      case "image":
        return `url('${props.background}');
  background-size : cover;
  background-repeat : no-repeat;
  background-position: center;
  height : 30vh;
  `;
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
    height: 12.5vh;
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

const PageLayoutNavigation = styled.div`
  position: relative;
  padding-top: 1em;
  padding-left: 2vw;
  display: flex;
`;

const ArrowExit = styled(FaArrowAltCircleLeft)`
  width: 2.5vw;
  height: 2.5vw;
  cursor: pointer;
  transition: 0.3s ease-in;

  @media (${Screen.tablet}) {
    width: 3.5vw;
    height: 3.5vw;
  }

  @media (${Screen.mobile}) {
    width: 5vw;
    height: 5vw;
  }
`;

/* Default Props */

PageLayoutHeader.defaultProps = {
  elementHeight: "20vh",
};

PageLayoutTitle.defaultProps = {
  textColor: "white",
};

/* Functional Component */

const PageLayout = ({
  background,
  type,
  title,
  elementHeight,
  children,
  theme,
}) => {
  let history = useHistory();

  return (
    <PageLayoutContainer>
      <PageLayoutHeader
        background={background}
        type={type}
        elementHeight={elementHeight}
      >
        <PageLayoutTitle>{title}</PageLayoutTitle>
      </PageLayoutHeader>
      <PageLayoutNavigation>
        <ArrowExit
          onClick={() => history.goBack()}
          color={theme === "light" ? Colors.white : Colors.blue}
        />
        <Breadcrumbs />
      </PageLayoutNavigation>
      {children}
    </PageLayoutContainer>
  );
};

/* Default Props */

PageLayout.defaultProps = {
  background: "/images/common/investigaciones-header-page.png",
  type: "color",
  theme: "normal",
};

export default PageLayout;
