import { useHistory, useParams } from "react-router-dom";
import Card from "components/Card";
import { Colors } from "styles";
import { requestsContent } from "data/requests/requests";
import Arrow from "assets/images/requests/arrow.png";

import {
  SolicitudesButton,
  SolicitudesBack,
  SolicitudesList,
  SolicitudesItem,
} from "./RequestList.styles";

const RequestsList = () => {
  const { section } = useParams();
  const history = useHistory();

  return (
    <>
      <Card boxShadow="none" background={Colors.blue} color={"white"}>
        <SolicitudesButton onClick={(e) => history.goBack()}>
          <SolicitudesBack src={Arrow} alt="Atrás"></SolicitudesBack>
        </SolicitudesButton>
        <SolicitudesList>
          {requestsContent[section].map(({ title, url }) => {
            return (
              <SolicitudesItem key={title}>
                <a href={url} target="_blank" rel="noreferrer noopener">
                  {title}
                </a>
              </SolicitudesItem>
            );
          })}
        </SolicitudesList>
      </Card>
    </>
  );
};

export default RequestsList;
