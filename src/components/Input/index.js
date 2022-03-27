import { getIn } from "formik";
import React, { useMemo } from "react";
import { Form, Col } from "react-bootstrap";
import { Types } from "./components";
const InputGroup = ({
  xs,
  label,
  type,
  name,
  onChange,
  formik,
  hasLabel = true,
  props,
}) => {
  const value = getIn(formik.values, name);
  const error = getIn(formik.errors, name);
  const [InputType] = useMemo(() => {
    return [Types[type]];
  }, [type]);

  return (
    <Form.Group as={Col} xs={xs} className="position-relative">
      {hasLabel && <Form.Label>{label}</Form.Label>}
      <InputType
        name={name}
        value={value}
        onChange={onChange ? onChange : formik.handleChange}
        error={error}
        label={label}
        {...props}
      />
      <Form.Control.Feedback type="invalid">{error}</Form.Control.Feedback>
    </Form.Group>
  );
};

export default InputGroup;
