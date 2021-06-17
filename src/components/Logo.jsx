import React from 'react'
import USC_LOGO from '../assets/images/usc-white-logo.png';
import styled from 'styled-components';

export const ImageLogo = styled.img`
    width : 10vw;
    height : 10vw;
`;

const Logo = ({logo}) => {
    return (
        <a href="https://investigaciones.usc.edu.co/" target="_blank" rel="noreferrer">
            <ImageLogo rel="preload"  src={logo || USC_LOGO} width={70} height={70} alt="Logo de la Universidad Santiago de Cali">
            </ImageLogo >
        </a>
    )
}

export default Logo
