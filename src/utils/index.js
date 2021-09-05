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
