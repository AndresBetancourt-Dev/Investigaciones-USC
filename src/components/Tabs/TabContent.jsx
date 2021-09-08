import { Link } from "react-router-dom";
import styled from "styled-components";
import { Colors, Screen } from "../../styles";

/* Styled Components */

const TabContentList = styled.ul`
  background: white;
  margin: 0;
  padding: 0;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-left: 5vw;
  margin-bottom: 1vw;
`;

const TabContentItemStyles = `
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

const TabContentListItem = styled.li`
  ${TabContentItemStyles}
`;

const TabContentLink = styled(Link)`
  text-decoration: none;
  ${TabContentItemStyles}
`;

/* Functional Component */

const TabContent = ({ content, type }) => {
  switch (type) {
    case "image":
      break;
    case "list":
    default:
      return (
        <TabContentList>
          {content.map((item) =>
            item.url ? (
              <TabContentListItem key={item.title}>
                <TabContentLink
                  to={{ pathname: item.url }}
                  target="_blank"
                  rel="noopener"
                >
                  {item.title}
                </TabContentLink>
                {item.child ? (
                  <TabContent content={item.child} type={type} />
                ) : null}
              </TabContentListItem>
            ) : (
              <TabContentListItem key={item.title}>
                {item.title}
                {item.child ? (
                  <TabContent content={item.child} type={type} />
                ) : null}
              </TabContentListItem>
            )
          )}
        </TabContentList>
      );
  }
};

export default TabContent;
