import { FooterState } from "../components/Footer";
import { HeaderState } from "../components/Header";

export function disableHeader() {
  HeaderState.fixed = false;
  HeaderState.showMenu = false;
}

export function normalHeader() {
  HeaderState.fixed = false;
}

export function hideHeader() {
  HeaderState.fixed = true;
  HeaderState.visible = false;
}

export function disableFooter() {
  FooterState.visible = false;
}

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
