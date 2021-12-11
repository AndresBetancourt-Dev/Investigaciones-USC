import { useHistory } from "react-router-dom";
import Breadcrumbs from "components/Breadcrumbs";
import { Colors } from "styles";
import {
  PageLayoutContainer,
  PageLayoutHeader,
  PageLayoutTitle,
  PageLayoutNavigation,
  ArrowExit,
} from "./PageLayout.styles";

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

PageLayout.defaultProps = {
  background: "/images/common/investigaciones-header-page.png",
  type: "color",
  theme: "normal",
};

export default PageLayout;
