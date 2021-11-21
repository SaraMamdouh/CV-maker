import { useFormik } from "formik";
import { Button, Col, Row, Form } from "react-bootstrap";
import cvTemplate from "../../assests/resume-template-1.jpg";
import React from "react";
import * as Yup from "yup";
import { useDispatch } from "react-redux";
import { addPersonalInfo } from "../../redux/actions";

const initialValues = {
  firstName: "",
  lastName: "",
  Profession: "",
  Address: "",
  email: "",
};

const validationSchema = Yup.object({
  firstName: Yup.string().required("this field is required"),
  lastName: Yup.string().required("this field is required"),
  Profession: Yup.string().required("this field is required"),
  Address: Yup.string().required("this field is required"),
  phone: Yup.string()
    .matches(
      /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/,
      "phone number is invalid."
    )
    .required("this field is required"),
  email: Yup.string().email("invalid email").required("this field is required"),
});

const CvForm = () => {
  const dispatch = useDispatch();
  const onSubmit = (values) => {
    dispatch(addPersonalInfo(values));
  };
  const formik = useFormik({ onSubmit, validationSchema, initialValues });

  return (
    <Row>
      <Col>
        <Form onSubmit={formik.handleSubmit}>
          <Row className="mb-3">
            <Form.Group
              as={Col}
              md="12"
              controlId="validationFormik101"
              className="position-relative"
            >
              <Form.Label>First name</Form.Label>
              <Form.Control
                type="text"
                name="firstName"
                value={formik.values?.firstName || ""}
                onChange={formik.handleChange}
                isInvalid={formik.errors?.firstName}
              />
              <Form.Control.Feedback type="invalid">
                {formik?.errors?.firstName}
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group
              as={Col}
              md="12"
              controlId="validationFormik102"
              className="position-relative"
            >
              <Form.Label>Last name</Form.Label>
              <Form.Control
                type="text"
                name="lastName"
                value={formik.values?.lastName || ""}
                onChange={formik.handleChange}
                isInvalid={formik.errors?.lastName}
              />

              <Form.Control.Feedback type="invalid">
                {formik?.errors?.lastName}
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group
              as={Col}
              md="12"
              controlId="validationFormik102"
              className="position-relative"
            >
              <Form.Label>Profession</Form.Label>
              <Form.Control
                type="text"
                name="Profession"
                value={formik.values?.Profession || ""}
                onChange={formik.handleChange}
                isInvalid={formik?.errors?.Profession}
              />
              <Form.Control.Feedback type="invalid">
                {formik?.errors?.Profession}
              </Form.Control.Feedback>{" "}
            </Form.Group>

            <Form.Group
              as={Col}
              md="12"
              controlId="validationFormik102"
              className="position-relative"
            >
              <Form.Label>Phone</Form.Label>
              <Form.Control
                type="text"
                name="phone"
                value={formik?.values?.phone || ""}
                onChange={formik.handleChange}
                isInvalid={formik?.errors?.phone}
              />
              <Form.Control.Feedback type="invalid">
                {formik?.errors?.phone}
              </Form.Control.Feedback>{" "}
            </Form.Group>

            <Form.Group
              as={Col}
              md="12"
              controlId="validationFormik102"
              className="position-relative"
            >
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="text"
                name="email"
                value={formik?.values?.email || ""}
                onChange={formik.handleChange}
                isInvalid={formik?.errors?.email}
              />
              <Form.Control.Feedback type="invalid">
                {formik?.errors?.email}
              </Form.Control.Feedback>{" "}
            </Form.Group>
          </Row>
          <Row className="mb-3">
            <Form.Group
              as={Col}
              md="12"
              controlId="validationFormik103"
              className="position-relative"
            >
              <Form.Label>Address</Form.Label>
              <Form.Control
                type="text"
                placeholder="Address"
                name="Address"
                value={formik?.values?.Address || ""}
                onChange={formik.handleChange}
                isInvalid={formik?.errors?.Address}
              />

              <Form.Control.Feedback type="invalid">
                {formik.errors.Address}
              </Form.Control.Feedback>
            </Form.Group>
          </Row>

          <Button type="submit" variant="secondary">
            Next
          </Button>
        </Form>
      </Col>
      <Col>
        <img src={cvTemplate} alt="cv template" className="w-100" />
      </Col>
    </Row>
  );
};

export default CvForm;
