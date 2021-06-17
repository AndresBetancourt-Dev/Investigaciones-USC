import styled from 'styled-components';

export const Card = styled.div`
    background-color: white;
    padding: 25px;
    width : 100%;
    text-align: justify;
    margin: 1em 0px;
    font-size : 1vw;
    font-weight: 300;
    box-shadow: 1px 1px 10px 0.5px rgb(0 0 0 / 50%);
    border-radius: 2px;

    @media (max-width: 1050px){
        font-size : 1.5vw;
    }

    @media (max-width: 650px){
        font-size : 2vw;
    }

    @media (max-width: 500px){
        font-size : 3.5vw;
    }
`;


