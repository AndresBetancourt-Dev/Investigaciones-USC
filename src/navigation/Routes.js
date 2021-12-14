import React from "react";
import { Route, Switch, BrowserRouter as Router } from "react-router-dom";
import Layout from "components/Layout";
import ScrollToTop from "components/ScrollToTop";

/* Pages */

import Home from "pages/Home";
import OldHome from "pages/OldHome";
import Solicitudes from "pages/Solicitudes";
import QuienesSomos from "pages/QuienesSomos";
import Convocatorias from "pages/Convocatorias";
import Convocatoria from "pages/Convocatorias/Convocatoria";
import Editorial from "pages/Editorial";
import Normatividad from "pages/Normatividad";
import Filun2021 from "pages/Filun/Filun2021";
import Redes from "pages/Redes";
import Formatos from "pages/Formatos";
import NotFound from "../components/NotFound";
import Otri from "pages/Otri";

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
          <Route exact path="/otri" component={Otri} />
          <Route exact path="/solicitudes" component={Solicitudes} />
          <Route exact path="/solicitudes/:route" component={Solicitudes} />
          <Route exact path="/convocatorias" component={Convocatorias} />
          <Route exact path="/convocatorias/:key" component={Convocatoria} />
          <Route exact path="/filun2021" component={Filun2021} />
          <Route exact path="/quienes-somos" component={QuienesSomos} />
          <Route exact path="/nuestras-redes" component={Redes} />
          <Route exact path="/formatos" component={Formatos} />
          <Route component={NotFound} />
        </Switch>
      </Layout>
    </Router>
  );
};

export default Routes;
