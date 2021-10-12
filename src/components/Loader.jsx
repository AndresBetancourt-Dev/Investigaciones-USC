import React from "react";
import styled from "styled-components";
import PuffLoader from "react-spinners/PuffLoader";
import { Colors } from "../styles";

const LoaderContainer = styled.div`
  width: 100%;
  height: 100%;
  min-height: 20vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Loader = () => {
  return (
    <LoaderContainer>
      <PuffLoader color={Colors.blue} />
    </LoaderContainer>
  );
};

export default Loader;
