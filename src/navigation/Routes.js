import React from "react";
import { Route, Switch, BrowserRouter as Router } from "react-router-dom";

/* Pages */

import Convocatorias from "../pages/Convocatorias";
import Home from "../pages/Home";
import OldHome from "../pages/OldHome";
import RequestsList from "../pages/RequestsList";
import Solicitudes from "../pages/Solicitudes";

/* Functional Component */

const Routes = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/home" component={OldHome} />
        <Route exact path="/solicitudes" component={Solicitudes} />
        <Route exact path="/solicitudes/:section" component={RequestsList} />
        <Route exact path="/convocatorias" component={Convocatorias} />
        <Route component={OldHome} />
      </Switch>
    </Router>
  );
};

export default Routes;
