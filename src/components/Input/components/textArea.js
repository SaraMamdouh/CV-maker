import React from "react";
import { Form } from "react-bootstrap";

const TextArea = ({ name, value, error, onChange, testId, props }) => {
  return (
    <Form.Control
      data-testid={testId}
      as={"textarea"}
      name={name}
      value={value || ""}
      onChange={onChange}
      isInvalid={error}
      {...props}
    />
  );
};

export default TextArea;
