export function lineBreak(text) {
  text = text.split("\n").map((item) => (
    <div>
      {item}
      <br />
    </div>
  ));
  return text;
}
