import { Button, Col, Row, Form } from "react-bootstrap";
import React from "react";
import InputGroup from "../Input";

const ExperienceForm = ({ formik, experience }) => {
  return (
    <>
      <InputGroup
        xs={12}
        type="text"
        label="Title"
        name="expreience.title"
        formik={formik}
        value={experience?.title || ""}
      />
      <InputGroup
        xs={12}
        type="text"
        label="Company name"
        name="expreience.company"
        formik={formik}
        value={experience?.company || ""}
      />
      <InputGroup
        xs={12}
        type="textarea"
        label="Discription"
        name="expreience.summary"
        formik={formik}
        value={experience?.summary || ""}
      />
      <InputGroup
        xs={12}
        type="Date"
        label="Start Date"
        name="expreience.startDate"
        formik={formik}
      />
      {formik?.values?.experience?.isCurrent && (
        <InputGroup
          xs={12}
          type="Date"
          label="End Date"
          name="expreience.endDate"
          formik={formik}
        />
      )}
      <InputGroup
        xs={12}
        type="CheckBox"
        label="currently working"
        name="expreience.isCurrent"
        formik={formik}
        value={experience?.isCurrent || ""}
        hasLabel={false}
        onChange={(e) => formik.setFieldValue(e.target.name, e.target.checked)}
      />
    </>
  );
};
const ExperienceSection = ({ formik }) => {
  const [experience, setExperience] = React.useState([]);
  const AddSection = React.useCallback(() => {
    setExperience([...experience, formik?.initialValues?.experience]);
  }, [experience]);

  return (
    <>
      <Col md={12} className="mb-4">
        <Row>
          <Col md={8}>
            <h3 className="mb-4 d-inline">Experience Information</h3>
          </Col>
          <Col>
            <Button type="submit" variant="secondary" onClick={AddSection}>
              Add Section
            </Button>
          </Col>
        </Row>
      </Col>
      <Col md={12}>
        {formik?.values?.experience?.length > 0 ? (
          formik?.values?.experience?.map((e) => {
            return <ExperienceForm experience={e} formik={formik} />;
          })
        ) : (
          <ExperienceForm formik={formik} experience={experience} />
        )}
      </Col>
    </>
  );
};

export default ExperienceSection;
