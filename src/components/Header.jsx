import React from 'react'
import styled from 'styled-components';
import {Colors} from "../styles/Colors";

const HeaderContainer = styled.header`
    width : 100%;
    height : 100px;
    background-color : ${Colors.blue};
`;


const Header = () => {
    return (
        <HeaderContainer>
        </HeaderContainer>
    )
}

export default Header
