import React from "react";
import PropTypes from "prop-types";

import { TitleView } from "./style";

function Title({
  fontSize = "MEDIUM",
  align = "left",
  mb = 0,
  level = 2,
  children = {},
  ...props
}) {
  return (
    <TitleView
      as={`h${level}`}
      fontSize={fontSize}
      mb={mb}
      align={align}
      {...props}
    >
      {children}
    </TitleView>
  );
}

export default Title;

Title.propTypes = {
  fontSize: PropTypes.oneOf(["BIG", "MEDIUM", "SMALL", "EXTRA_SMALL"]),
  lineHeight: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  align: PropTypes.oneOf(["left", "center", "right"]),
  mb: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  level: PropTypes.number,
  children: PropTypes.string
};
