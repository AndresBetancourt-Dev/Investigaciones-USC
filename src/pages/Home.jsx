import React from 'react';
import { Button } from '../components/Button';

const Home = () => {
    return (
        <div style={{padding : "1em"}}>
            <Button href="/solicitudes">Solicitudes</Button>
            <Button href="/convocatorias">Convocatorias</Button>
        </div>
    )
}

export default Home;
