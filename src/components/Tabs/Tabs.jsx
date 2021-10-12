import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import { Colors, Screen, Shadows } from "../../styles";
import slugify from "slugify";
import NotFound from "../../pages/NotFound";
import TabContent from "./TabContent";
import { isUndefined } from "../../utils";

/* Styled Components */

const TabContainer = styled.div`
  width: 100%;
  height: auto;
  min-height: 500px;
  background: white;
  display: flex;
  box-shadow: ${Shadows.normal};

  @media (${Screen.tabletXL}) {
    flex-direction: column;
  }

  @media (${Screen.mobile}) {
    min-height: 0;
  }
`;

const TabBar = styled.aside`
  width: 20%;
  height: 100%;
  background: white;
  z-index: 10;

  @media (${Screen.tabletXL}) {
    width: 100%;
    height: auto;
  }
`;

const TabContentContainer = styled.section`
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

const TabList = styled.ul`
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

const TabItem = styled.li`
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

const TabItemImage = styled.img`
  width: 30%;

  @media (${Screen.tabletXL}) {
    width: 30%;
  }
`;

const TabItemTitle = styled.h2`
  width: 80%;
  text-align: center;
  font-size: 1.5vw;

  @media (${Screen.mobile}) {
    font-size: 2vw;
  }
`;

/* Functional Component */

const Tabs = ({ sections = [], redirect, url }) => {
  const [activeTab, setActiveTab] = useState({});
  const [found, setFound] = useState(true);

  let { route } = useParams();

  const handleClick = (e, section) => {
    e.preventDefault();
    setActiveTab(section);
  };

  useEffect(() => {
    setActiveTab(!isUndefined(sections[0]) ? sections[0] : {});
  }, [sections]);

  useEffect(() => {
    if (route != null) {
      const section = sections.find(({ title }) => {
        return route === slugify(title, { replacement: "-", lower: true });
      });

      if (section != null) {
        setActiveTab(section);
        setFound(true);
      } else {
        setFound(false);
      }
    }
  }, [route, sections]);

  if (found && sections.length) {
    return (
      <TabContainer>
        <TabBar>
          <TabList>
            {sections.map((section) => {
              return (
                <TabItem
                  className={activeTab.title === section.title ? "active" : ""}
                  key={section.title}
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
              return (
                <TabContent content={section.content} key={section.title} />
              );
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
        message="Lo sentimos, actualmente no contamos con información para esta página."
        redirect={redirect}
        url={url}
      />
    );
  }
};

export { Tabs };
