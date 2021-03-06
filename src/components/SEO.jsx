import { Helmet } from "react-helmet-async";

const SEO = ({ title, description }) => {
  return (
    <Helmet>
      <html lang="es" />
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta charset="utf-8" />
      <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta
        name="keywords"
        content="Universidad Santiago de Cali, Investigación, OTRI, Editorial, Dirección General de Investigaciones"
      />
      <meta
        name="rights"
        content="Derechos Reservados - Universidad Santiago de Cali 2022"
      />
      <meta name="author" content="Andres Betancourt" />
    </Helmet>
  );
};

export default SEO;
