import { useFormik } from "formik";
import { Form, Col } from "react-bootstrap";
import { Button, message } from "antd";
import React from "react";
import * as Yup from "yup";
import { useDispatch } from "react-redux";
import { addPersonalInfo } from "../../redux/actions";
import styles from "./header.module.scss";
import { steps } from "./constants";

const initialValues = {
  firstName: "",
  lastName: "",
  summary: "",
  address: "",
  phone: "",
  email: "",
  education: [
    {
      degree: "",
      fieldOfStudy: "",
      notes: "",
      schoolName: "",
      startDate: "",
      endDate: "",
    },
  ],
};

const validationSchema = Yup.object({
  firstName: Yup.string().required("this field is required"),
  lastName: Yup.string().required("this field is required"),
  summary: Yup.string(),
  address: Yup.string().required("this field is required"),
  phone: Yup.string()
    .matches(
      /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/,
      "phone number is invalid."
    )
    .required("this field is required"),
  email: Yup.string().email("invalid email").required("this field is required"),
  education: Yup.array(),
});

const CvForm = ({ generate, current, setCurrent }) => {
  const dispatch = useDispatch();
  const onSubmit = (values) => {
    setCurrent(current + 1);
    dispatch(addPersonalInfo(values));
  };
  const formik = useFormik({
    onSubmit,
    validateOnChange: false,
    enableReinitialize: true,
    initialValues,
    validationSchema,
  });
  const CurrentStep = steps[current].content;

  return (
    <>
      <Col md={12}>
        <Form onSubmit={formik.onSubmit}>
          <CurrentStep formik={formik} />
          <div className="steps-action float-right mt-4">
            {current > 0 && (
              <Button
                style={{ margin: "0 8px" }}
                onClick={() => setCurrent(current - 1)}
              >
                Previous
              </Button>
            )}
            {current < steps.length - 1 && (
              <Button type="primary" onClick={formik.handleSubmit}>
                Next
              </Button>
            )}
            {current === steps.length - 1 && (
              <Button type="primary" onClick={generate}>
                generate
              </Button>
            )}
          </div>
        </Form>
        <div className={styles.lines}></div>
      </Col>
    </>
  );
};

export default CvForm;
