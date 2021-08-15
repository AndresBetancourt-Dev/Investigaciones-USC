import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import { Colors, Screen, Shadows } from "../../styles";
import slugify from "slugify";
import NotFound from "../../pages/NotFound";
import TabContent from "./TabContent";

/* Styled Components */

const TabContainer = styled.div`
  width: 100%;
  height: auto;
  min-height: 500px;
  background: white;
  display: flex;

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
  height: 12.5vh;
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
  width: 20%;

  @media (${Screen.tabletXL}) {
    width: 50%;
  }

  @media (${Screen.mobile}) {
    width: 100%;
  }
`;

const TabItemTitle = styled.h3`
  width: 80%;
  text-align: center;
  font-size: 1.5vw;

  @media (${Screen.mobile}) {
    display: none;
  }
`;

/* Functional Component */

const Tabs = ({ sections = [] }) => {
  const [activeTab, setActiveTab] = useState(sections[0].title);
  const [found, setFound] = useState(true);

  let { route } = useParams();

  const handleClick = (e, title) => {
    e.preventDefault();
    setActiveTab(title);
  };

  useEffect(() => {
    if (route != null) {
      const section = sections.find(({ title }) => {
        return route === slugify(title, { replacement: "-", lower: true });
      });

      if (section != null) {
        setActiveTab(section.title);
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
            {sections.map(({ image, title }) => {
              return (
                <TabItem
                  className={activeTab === title ? "active" : ""}
                  key={title}
                  onClick={(e) => handleClick(e, title)}
                >
                  <TabItemImage src={image} />
                  <TabItemTitle>{title}</TabItemTitle>
                </TabItem>
              );
            })}
          </TabList>
        </TabBar>
        <TabContentContainer>
          {sections.map(({ content, title }) => {
            if (activeTab === title) {
              return <TabContent content={content} key={title} />;
            } else {
              return null;
            }
          })}
        </TabContentContainer>
      </TabContainer>
    );
  } else {
    return <NotFound type="fragment" />;
  }
};

export { Tabs };
