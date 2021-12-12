import { useEffect, useState } from "react";
import { useParams, useHistory } from "react-router-dom";
import slugify from "slugify";
import NotFound from "components/NotFound/NotFound";
import TabContent from "./TabContent";
import {
  TabContainer,
  TabBar,
  TabList,
  TabItem,
  TabItemImage,
  TabItemTitle,
  TabContentContainer,
} from "./Tabs.styles";

const Tabs = ({ sections = [], redirect, url }) => {
  const [activeTab, setActiveTab] = useState({});
  const [found, setFound] = useState(false);

  let { route } = useParams();
  let history = useHistory();

  const handleClick = (e, section) => {
    e.preventDefault();
    setActiveTab(section);
    let pathname = history.location.pathname.split("/");
    let currentRoute = slugify(section.title, {
      replacement: "-",
      lower: true,
    });
    if (pathname.length > 2) {
      pathname.splice(pathname.length - 1, 1, currentRoute);
    } else {
      pathname.push(currentRoute);
    }
    let nextRoute = pathname.join("/");
    history.push(nextRoute);
  };

  useEffect(() => {
    if (route != null) {
      const section = sections.find(({ title }) => {
        return (
          route ===
          slugify(title, {
            replacement: "-",
            lower: true,
          })
        );
      });
      if (section != null) {
        setActiveTab(section);
        setFound(true);
      } else {
        setFound(false);
      }
    } else {
      if (sections.length >= 1) {
        setActiveTab(sections[0]);
        setFound(true);
      } else {
        setFound(false);
      }
    }
  }, [route, sections]);

  if (found) {
    return (
      <TabContainer>
        <TabBar>
          <TabList>
            {sections.map((section) => {
              return (
                <TabItem
                  className={activeTab.title === section.title ? "active" : ""}
                  key={section._id}
                  onClick={(e) => handleClick(e, section)}
                >
                  <TabItemImage
                    src={section.image[0]?.url}
                    alt={section.title}
                    title={section.title}
                  />
                  <TabItemTitle>{section.title}</TabItemTitle>
                </TabItem>
              );
            })}
          </TabList>
        </TabBar>
        <TabContentContainer>
          {sections.map((section) => {
            if (activeTab.title === section.title) {
              return <TabContent content={section.content} key={section._id} />;
            } else {
              return null;
            }
          })}
        </TabContentContainer>
      </TabContainer>
    );
  } else {
    return (
      <NotFound
        type="fragment"
        message="Lo sentimos, actualmente no existe información para esta página."
        redirect={redirect}
        url={url}
      />
    );
  }
};

export default Tabs;
