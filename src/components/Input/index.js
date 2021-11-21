import React from "react";
import { Form, Col } from "react-bootstrap";
import { Types } from "./components";
const InputGroup = ({
  xs,
  label,
  type,
  name,
  value,
  error,
  onChange,
  formik,
  props,
}) => {
  const InputTypes = ({ name, value, onChange, error, props }) => {
    const Component = Types[type];
    return (
      <Component
        name={name}
        value={value}
        onChange={onChange ? onChange : formik.handleChange}
        error={error}
        {...props}
      />
    );
  };
  return (
    <Form.Group as={Col} md={xs} className="position-relative">
      <Form.Label>{label}</Form.Label>
      <InputTypes
        name={name}
        value={value}
        onChange={onChange}
        error={error}
        {...props}
      />
      <Form.Control.Feedback type="invalid">{error}</Form.Control.Feedback>
    </Form.Group>
  );
};

export default InputGroup;
