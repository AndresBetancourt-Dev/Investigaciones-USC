import styled from 'styled-components';
import {Colors} from "../styles/Colors";

export const Button = styled.a`
    background-color : ${props => props.background};
    color : ${props => props.color};
    text-decoration : none;
    padding: 1em;
    box-shadow : 1px 1px 10px rgba(0,0,0,0.5);
    transition : 0.3s ease-in;

    &:hover{
        padding: 2em;
    }
`;


Button.defaultProps = {
    background : Colors.blue,
    color : "white"
}
