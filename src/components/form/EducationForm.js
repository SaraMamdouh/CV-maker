import { Button, Col, Row, Form } from "react-bootstrap";
import cvTemplate from "../../assests/resume-template-1.jpg";
import React from "react";
import styles from "./header.module.scss";
import InputGroup from "../Input";

const EducationForm = ({ formik, education }) => {
  return (
    <Col md={12}>
      <Form onSubmit={formik.handleSubmit}>
        <Row className="mb-3 align-items-center">
          <InputGroup
            xs={6}
            type="text"
            label="degree"
            name="education.degree"
            formik={formik}
            value={education?.degree || ""}
          />
          <InputGroup
            xs={12}
            type="text"
            label="field Of Study"
            name="education.fieldOfStudy"
            formik={formik}
            value={education?.fieldOfStudy || ""}
          />
          <InputGroup
            xs={12}
            type="textarea"
            label="notes"
            name="education.notes"
            formik={formik}
            value={education?.notes || ""}
          />

          <InputGroup
            xs={12}
            type="text"
            label="school Name"
            name="education.schoolName"
            formik={formik}
            value={education?.schoolName || ""}
          />

          <InputGroup
            xs={3}
            type="date"
            label="start Date"
            name="education.startDate"
            formik={formik}
            value={education?.startDate || ""}
          />

          <InputGroup
            xs={3}
            type="date"
            label="end Date"
            name="education.endDate"
            formik={formik}
            value={education?.endDate || ""}
          />
        </Row>
      </Form>
      <div className={styles.lines}></div>
    </Col>
  );
};
const EducationSection = ({ formik }) => {
  const [education, setEducation] = React.useState([]);
  const AddSection = React.useCallback(() => {
    setEducation([...education, formik?.initialValues?.education]);
  }, [education]);

  return (
    <>
      <Col md={12} className="mb-4">
        <Row>
          <Col md={8}>
            <h3 className="mb-4 d-inline">Educational Information</h3>
          </Col>
          <Col>
            <Button type="submit" variant="secondary" onClick={AddSection}>
              Add Section
            </Button>
          </Col>
        </Row>
      </Col>
      <Col md={12}>
        {formik?.values?.education?.length > 0 ? (
          formik?.values?.education?.map((e) => {
            return <EducationForm education={e} formik={formik} />;
          })
        ) : (
          <EducationForm formik={formik} education={education} />
        )}
      </Col>
    </>
  );
};

export default EducationSection;
