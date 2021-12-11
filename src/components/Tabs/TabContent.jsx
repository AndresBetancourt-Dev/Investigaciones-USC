import {
  TabContentList,
  TabContentListItem,
  TabContentLink,
} from "./TabContent.styles";

const TabContent = ({ content = [], type = "list" }) => {
  switch (type) {
    case "image":
      break;
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
