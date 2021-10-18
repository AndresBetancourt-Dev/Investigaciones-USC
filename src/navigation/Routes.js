import React from "react";
import { Route, Switch, BrowserRouter as Router } from "react-router-dom";
import Layout from "../components/Layout";
import ScrollToTop from "../components/ScrollToTop";

/* Pages */

import Convocatorias from "../pages/Convocatorias";
import Editorial from "../pages/Editorial";
import Home from "../pages/Home/";
import Normatividad from "../pages/Normatividad/";
import OldHome from "../pages/OldHome";
import Solicitudes from "../pages/Solicitudes/";
import NotFound from "../components/NotFound";
import Filun2021 from "../pages/Filun/Filun2021";
import Us from "../pages/QuienesSomos";
import Redes from "pages/Redes";

/* Functional Component */

const Routes = () => {
  return (
    <Router>
      <Layout>
        <ScrollToTop />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/home" component={OldHome} />
          <Route exact path="/normatividad" component={Normatividad} />
          <Route exact path="/editorial" component={Editorial} />
          <Route exact path="/solicitudes" component={Solicitudes} />
          <Route exact path="/solicitudes/:route" component={Solicitudes} />
          <Route exact path="/convocatorias" component={Convocatorias} />
          <Route exact path="/filun2021" component={Filun2021} />
          <Route exact path="/quienes-somos" component={Us} />
          <Route exact path="/nuestras-redes" component={Redes} />
          <Route component={NotFound} />
        </Switch>
      </Layout>
    </Router>
  );
};

export default Routes;
