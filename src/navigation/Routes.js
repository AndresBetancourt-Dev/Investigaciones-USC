import React from "react";
import { Route, Switch, BrowserRouter as Router } from "react-router-dom";
import Layout from "../components/Layout";

/* Pages */

import Convocatorias from "../pages/Convocatorias";
import Editorial from "../pages/Editorial";
import Home from "../pages/Home";
import OldHome from "../pages/OldHome";
import RequestsList from "../pages/RequestsList";
import Solicitudes from "../pages/Solicitudes";

/* Functional Component */

const Routes = () => {
  return (
    <Router>
      <Layout>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/home" component={OldHome} />
          <Route exact path="/editorial" component={Editorial} />
          <Route exact path="/solicitudes" component={Solicitudes} />
          <Route exact path="/solicitudes/:section" component={RequestsList} />
          <Route exact path="/convocatorias" component={Convocatorias} />
          <Route component={Home} />
        </Switch>
      </Layout>
    </Router>
  );
};

export default Routes;
