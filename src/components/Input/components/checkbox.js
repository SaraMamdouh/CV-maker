import React from "react";
import { Checkbox } from "antd";

const CheckBox = ({ name, label, onChange }) => {
  return (
    <Checkbox name={name} onChange={onChange}>
      {label}
    </Checkbox>
  );
};
export default CheckBox;
