import styled from 'styled-components';
import {Colors} from "../styles/Colors";

export const Button = styled.a`
    background-color : ${props => props.background};
    color : ${props => props.color};
    text-decoration : none;
    text-align: center;
    font-size : 1em;
    padding: 1em;
    box-shadow : 1px 1px 10px rgba(0,0,0,0.5);
    transition : 0.5s ease-in;
    width : 100%;
`;

Button.defaultProps = {
    background : Colors.blue,
    color : "white"
}
