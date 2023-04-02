import React from "react";
import PropTypes from "prop-types";

import { TextInputView } from "./style";

function TextInput({
  mb = 0,
  value = "",
  placeholder = "Введите текст",
  onUpdate = () => {},
  ...props
}) {
  return (
    <TextInputView
      mb={mb}
      value={value}
      placeholder={placeholder}
      onChange={onUpdate}
      {...props}
    />
  );
}

export default TextInput;

TextInput.propTypes = {
  mb: PropTypes.number,
  value: PropTypes.string,
  placeholder: PropTypes.string,
  onUpdate: PropTypes.func
};
