import React from "react";
import InputGroup from "../Input";
import { Row } from "react-bootstrap";

const PersonalForm = ({ formik }) => {
  return (
    <Row className="mb-3 align-items-center">
      <InputGroup
        xs={6}
        type="text"
        label="First Name"
        name="firstName"
        formik={formik}
      />
      <InputGroup
        xs={6}
        type="text"
        label="Last Name"
        name="lastName"
        formik={formik}
      />
      <InputGroup
        xs={12}
        type="email"
        label="Email"
        name="email"
        formik={formik}
      />
      <InputGroup
        xs={12}
        type="number"
        label="Phone"
        name="phone"
        formik={formik}
      />
      <InputGroup
        xs={12}
        type="text"
        label="Address"
        name="address"
        formik={formik}
      />
      <InputGroup
        xs={12}
        type="textarea"
        label="Summary"
        name="summary"
        formik={formik}
        row="3"
      />
    </Row>
  );
};

export default PersonalForm;
