import React from 'react';
import { Route , Switch , BrowserRouter as Router } from 'react-router-dom';

/* Pages */

import Convocatorias from '../pages/Convocatorias';
import Home from '../pages/Home';
import Solicitudes from '../pages/Solicitudes';

const Routes = () => {
    return (
        <Router>
            <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/home" component={Home} />
                <Route exact path="/solicitudes" component={Solicitudes} />
                <Route exact path="/convocatorias" component={Convocatorias}/>
            </Switch>
        </Router>
    )
}

export default Routes;
