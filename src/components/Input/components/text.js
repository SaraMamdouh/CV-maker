import React from "react";
import { Form } from "react-bootstrap";

const Text = ({ type, name, value, error, onChange, props }) => {
  return (
    <Form.Control
      type={type}
      name={name}
      value={value || ""}
      onChange={onChange}
      isInvalid={error}
      {...props}
    />
  );
};

export default Text;
