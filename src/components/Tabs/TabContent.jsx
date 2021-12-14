import { useLocation } from "react-router-dom";
import {
  TabContentList,
  TabContentImages,
  TabContentImageContainer,
  TabContentImage,
  TabContentImageTitle,
  TabContentListItem,
  TabContentLink,
} from "./TabContent.styles";

const TabContent = ({ content = [], type = "list" }) => {
  const location = useLocation();
  switch (type) {
    case "image":
      return (
        <TabContentImages>
          {content.map((item) => (
            <TabContentLink
              to={`${location.pathname}/${item.key}`}
              key={item.key}
              type={type}
            >
              <TabContentImageContainer>
                {item.image ? (
                  <TabContentImage src={item.image[0]?.url} />
                ) : (
                  <TabContentImageTitle>{item.title}</TabContentImageTitle>
                )}
              </TabContentImageContainer>
            </TabContentLink>
          ))}
        </TabContentImages>
      );
    case "list":
    default:
      return (
        <TabContentList>
          {content.map((item) =>
            item.url ? (
              <TabContentListItem key={item._id}>
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
              <TabContentListItem key={item._id}>
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
