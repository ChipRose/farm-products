import React from "react";
import PropTypes from "prop-types";

import { ButtonView } from "./style";

function Button(props) {
  const {
    variant = "main",
    width = "",
    type = "button",
    link = "",
    onClick = () => {},
    children = {}
  } = props;
  return (
    <ButtonView
      {...props}
      {...(link ? { to: link } : { as: "button", type: type })}
      onClick={onClick}
      variant={variant}
      width={width}
    >
      {children}
    </ButtonView>
  );
}

export default Button;

Button.propTypes = {
  variant: PropTypes.oneOf(["main", "tab", "link"]),
  type: PropTypes.oneOf(["button", "submit"]),
  width: PropTypes.number,
  link: PropTypes.string,
  children: PropTypes.string,
  active: PropTypes.bool,
  onClick: PropTypes.func
};
