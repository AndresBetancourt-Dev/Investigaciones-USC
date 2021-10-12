export function lineBreak(text, Component) {
  text = text.split("\n").map((item, i) =>
    Component !== undefined ? (
      <Component key={i}>
        {item}
        <br />
      </Component>
    ) : (
      <div key={i}>
        {item}
        <br />
      </div>
    )
  );
  return text;
}

export function isUndefined(variable) {
  return (
    typeof variable === undefined || variable === null || variable === undefined
  );
}

export function getBackendUrl(path) {
  return `${getEndpointByEnviroment()}${path}`;
}

export function getEndpointByEnviroment() {
  switch (process.env.NODE_ENV) {
    case "production":
      return process.env.REACT_APP_ENDPOINT_PRODUCTION;
    case "development":
    default:
      return process.env.REACT_APP_ENDPOINT_DEVELOPMENT;
  }
}
