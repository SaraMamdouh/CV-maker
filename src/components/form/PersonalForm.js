import { Col, Row, Form } from "react-bootstrap";
import React from "react";
import * as Yup from "yup";
import { useDispatch } from "react-redux";
import styles from "./header.module.scss";
import InputGroup from "../Input";

const PersonalForm = ({ formik }) => {
  return (
    <Col md={12}>
      <h3 className="mb-4">Personal Information</h3>
      <Form onSubmit={formik.handleSubmit}>
        <Row className="mb-3 align-items-center">
          <InputGroup
            xs={6}
            type="text"
            label="First Name"
            name="personalInfo.firstName"
            value={formik?.values?.personalInfo?.firstName}
            error={formik?.errors?.personalInfo?.firstName}
            onChange={formik.handleChange}
          />
          <InputGroup
            xs={6}
            type="text"
            label="Last Name"
            name="personalInfo.lastName"
            value={formik?.values?.personalInfo?.lastName}
            error={formik?.errors?.personalInfo?.lastName}
            onChange={formik.handleChange}
          />
          <InputGroup
            xs={12}
            type="email"
            label="Email"
            name="personalInfo.email"
            value={formik?.values?.personalInfo?.email}
            error={formik?.errors?.personalInfo?.email}
            onChange={formik.handleChange}
          />
          <InputGroup
            xs={12}
            type="number"
            label="Phone"
            name="personalInfo.phone"
            value={formik?.values?.personalInfo?.phone}
            error={formik?.errors?.personalInfo?.phone}
            onChange={formik.handleChange}
          />
          <InputGroup
            xs={12}
            type="text"
            label="Address"
            name="personalInfo.address"
            value={formik?.values?.personalInfo?.address}
            error={formik?.errors?.personalInfo?.address}
            onChange={formik.handleChange}
          />
          <InputGroup
            xs={12}
            type="textarea"
            label="Summary"
            name="personalInfo.summary"
            value={formik?.values?.personalInfo?.summary}
            error={formik?.errors?.personalInfo?.summary}
            onChange={formik.handleChange}
            row="3"
          />
        </Row>
      </Form>
      <div className={styles.lines}></div>
    </Col>
  );
};

export default PersonalForm;
