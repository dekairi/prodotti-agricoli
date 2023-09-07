import React from "react";
import { VisuallyHiddenInput } from "/src/components/styled";
import { CheckboxLabel, Label } from "./styles";

function Checkbox({ selectValue, name, value, text, onChange, ...props }) {
  const isChecked = value === selectValue;

  return (
    <Label>
      <VisuallyHiddenInput
        value={value}
        checked={isChecked}
        name={name}
        onChange={onChange}
        {...props}
        type="checkbox"
      />
      <CheckboxLabel $isChecked={isChecked}>{text}</CheckboxLabel>
    </Label>
  );
}

export default Checkbox;
