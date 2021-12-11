import PuffLoader from "react-spinners/PuffLoader";
import { Colors } from "styles";
import { LoaderContainer } from "./Loader.styles";

const Loader = () => {
  return (
    <LoaderContainer>
      <PuffLoader color={Colors.blue} />
    </LoaderContainer>
  );
};

export default Loader;
