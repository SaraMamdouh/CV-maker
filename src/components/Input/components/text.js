import React from "react";
import { Form } from "react-bootstrap";

const Text = ({ type, name, value, error, onChange, testId, props }) => {
  return (
    <Form.Control
      data-testid={testId}
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
