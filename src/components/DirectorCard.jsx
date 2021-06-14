import React from 'react'
import styled from 'styled-components';


const Director = styled.div`
    display : grid;
    grid-template-columns: .33fr .66fr;
`;

const DirectorImage = styled.img`
    width : 100%;
    height: auto;
`;

const DirectorInformation = styled.div`
`;

const DirectorTitle = styled.h2`
    text-align : center;
`;

const DirectorSubtitle = styled.h4`
    text-align : center;
`;

const DirectorContent = styled.div`
    padding : 1em;
`;

const DirectorSubContent = styled.div`
    padding : 1em;
`;

const DirectorContact = styled.div`
    display : grid;
    grid-template-columns : repeat(3,1fr);
    justify-items : center;
`;

const DirectorCard = ({image,title,subtitle,content,subcontent,phone,extension,cvlac}) => {

    function lineBreak(text){
        text = text.split('\n').map(item => <div>{item}<br/></div>);
        return text;
    }

    return (
        <Director>
            <DirectorImage src={image} alt={title}>
            </DirectorImage>
            <DirectorInformation>
                <DirectorTitle>
                    {title}
                </DirectorTitle>
                <DirectorSubtitle>
                    {subtitle}
                </DirectorSubtitle>
                <DirectorContent>
                    {lineBreak(content)}
                </DirectorContent>
                <DirectorSubContent>
                    {lineBreak(subcontent)}
                </DirectorSubContent>
                <DirectorContact>
                    <a href={cvlac}>CvLAC</a>
                    <div>{phone}</div>
                    <div>{extension}</div>
                </DirectorContact>
            </DirectorInformation>
        </Director>
    )
}

export default DirectorCard
