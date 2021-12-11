import { Colors } from "styles";
import { NormalButton, LinkButton } from "./Button.styles";

const Button = ({
  type,
  background,
  color,
  fontWeight,
  children,
  to,
  ...rest
}) => {
  switch (type) {
    case "normal":
      return (
        <NormalButton
          background={background}
          color={color}
          fontWeight={fontWeight}
          href={to}
          {...rest}
        >
          {children}
        </NormalButton>
      );
    case "link":
    default:
      return (
        <LinkButton
          background={background}
          color={color}
          fontWeight={fontWeight}
          to={to}
        >
          {children}
        </LinkButton>
      );
  }
};

Button.defaultProps = {
  background: Colors.blue,
  color: "white",
  fontWeight: 300,
};

export default Button;
