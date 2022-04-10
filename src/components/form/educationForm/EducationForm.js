import { Button, Col, Row } from "react-bootstrap";
import React from "react";
import { BsFillTrashFill } from "react-icons/bs";
import InputGroup from "../../Input";

const EducationForm = ({ formik, index, handleRemove }) => {
  return (
    <Row className="mb-3">
      <InputGroup
        xs={6}
        type="text"
        label="degree"
        name={`education[${index}].degree`}
        formik={formik}
      />
      {index > 0 ? (
        <Col xs={6} className="text-right">
          <BsFillTrashFill className="lead" onClick={handleRemove} />
        </Col>
      ) : null}

      <InputGroup
        xs={12}
        type="text"
        label="field Of Study"
        name={`education[${index}].fieldOfStudy`}
        formik={formik}
      />
      <InputGroup
        xs={12}
        type="textarea"
        label="notes"
        name={`education[${index}].notes`}
        formik={formik}
      />

      <InputGroup
        xs={12}
        type="text"
        label="school Name"
        name={`education[${index}].schoolName`}
        formik={formik}
      />

      <InputGroup
        xs={3}
        type="date"
        label="start Date"
        name={`education[${index}].startDate`}
        formik={formik}
      />

      <InputGroup
        xs={3}
        type="date"
        label="end Date"
        name={`education[${index}].endDate`}
        formik={formik}
      />
    </Row>
  );
};
const EducationSection = ({ formik }) => {
  const AddSection = React.useCallback(() => {
    formik?.values?.education?.push(...formik.initialValues.education);
  }, [formik]);
  console.log(formik?.values);
  return (
    <>
      <Col md={12} className="mb-4">
        <Row>
          <Col md={8}>
            <h3 className="mb-4 d-inline">Educational Information</h3>
          </Col>
          <Col>
            <Button variant="secondary" onClick={AddSection}>
              Add Section
            </Button>
          </Col>
        </Row>
      </Col>
      <Col md={12}>
        {formik.values.education?.map((section, index) => {
          return <EducationForm key={index} formik={formik} index={index} />;
        })}
      </Col>
    </>
  );
};

export default EducationSection;