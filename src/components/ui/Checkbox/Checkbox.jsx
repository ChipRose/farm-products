import React from "react";

import { VisuallyHiddenInput } from "/src/components/styled";

import { CheckboxView, LabledCheckboxView } from "./style";

function Checkbox(props) {
  const { name, value, id, checked, onChange } = props;

  return (
    <LabledCheckboxView>
      <VisuallyHiddenInput
        {...props}
        id={`checkbox-${id}`}
        type="checkbox"
        name={name}
        value={value}
        checked={checked}
        onChange={onChange}
      />
      <CheckboxView
        htmlFor={`checkbox-${id}`}
        checked={checked ? 1 : 0}
        {...props}
      >
        {name}
      </CheckboxView>
    </LabledCheckboxView>
  );
}

export default Checkbox;
