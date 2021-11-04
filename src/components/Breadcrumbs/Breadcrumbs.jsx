import React from "react";
import useBreadcrumbs from "use-react-router-breadcrumbs";
import { deslugify } from "utils";
import { BreadcrumbLink } from "./Breadcrumbs.styles";
import { BreadcrumbsContainer } from "./Breadcrumbs.styles";

const Breadcrumbs = () => {
  const breadcrumbs = useBreadcrumbs();
  return (
    <BreadcrumbsContainer>
      {breadcrumbs.map(({ breadcrumb, key }) => {
        let route = deslugify(breadcrumb.props.children);
        return (
          <BreadcrumbLink key={key} to={key} title={route}>
            {route}
          </BreadcrumbLink>
        );
      })}
    </BreadcrumbsContainer>
  );
};

export default Breadcrumbs;
