import React from 'react'
import USC_LOGO from '../assets/images/usc-white-logo.png';
import styled from 'styled-components';

export const ImageLogo = styled.img`
    width : 5vw;
    height : 5vw;
`;

const Logo = () => {
    return (
        <a href="https://investigaciones.usc.edu.co/">
            <ImageLogo  src={USC_LOGO} width={70} height={70} alt="Logo de la Universidad Santiago de Cali">
            </ImageLogo >
        </a>
    )
}

export default Logo
