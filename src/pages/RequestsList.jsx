import React from 'react';
import { useHistory, useParams } from 'react-router-dom';
import styled from 'styled-components';
import { Card } from '../components/Card';
import SolicitudesContainer from '../components/SolicitudesContainer';
import { requestsContent } from '../data/requests/requests';
import { Colors } from '../styles/Colors';
import Arrow from "../assets/images/requests/arrow.png";

const SolicitudesButton = styled.button`
    width : 5vw;
    height : 5vw;
    outline : none;
    border : none;
    display : flex;
    flex-direction: column;
    align-items : center;
    background : ${Colors.blue};
    cursor : pointer;
`;

const SolicitudesBack = styled.img`
    width : 100%;
    height : 100%;
`;

const SolicitudesItem = styled.li`
    margin : 2.5px;

    &::marker{
        color : white;
    }

    & a{
        color : white;
        text-decoration : none;
        font-weight : 700;
    }
`;

const RequestsList = () => {
    const {section} = useParams();
    const history = useHistory();

    return (
        <SolicitudesContainer>
            <Card boxShadow="none" background={Colors.blue} color={"white"}>
                <SolicitudesButton onClick={(e)=> history.goBack()}>
                    <SolicitudesBack src={Arrow} alt="Atrás">
                    </SolicitudesBack>
                </SolicitudesButton>
                <ul>
                    {requestsContent[section].map(({title,url})=> {
                        return (
                            <SolicitudesItem key={title}>
                                <a href={url} target="_blank" rel="noreferrer">{title}</a>
                            </SolicitudesItem>
                            
                        )
                    })}
                </ul>
            </Card>
        </SolicitudesContainer>
            
        
    )
};

export default RequestsList;
