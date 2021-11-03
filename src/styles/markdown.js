import styled from "styled-components";
import { Colors } from "styles";

export const MarkdownStyles = styled.section`
  width: 100%;
  color: ${(props) => (props.theme === "light" ? Colors.white : Colors.blue)};

  & img {
    width: 100%;
  }
`;
