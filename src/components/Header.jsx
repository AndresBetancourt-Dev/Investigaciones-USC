import React from 'react'
import styled from 'styled-components';
import Logo from './Logo'
import {Colors} from "../styles/Colors";

const HeaderContainer = styled.header`
    width : 100%;
    height : auto;
    background-color : ${Colors.blue};
    display : flex;
    padding : 1vw;
`;


const Header = () => {
    return (
        <HeaderContainer>
            <Logo/>
        </HeaderContainer>
    )
}

export default Header
