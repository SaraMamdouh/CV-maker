import { Form, Col } from "react-bootstrap";
import { Button } from "antd";
import React from "react";

import styles from "./header.module.scss";
import { useFormHook } from "./useFormHooks";
import { steps } from "./constants";

const CvForm = ({ generate, current, setCurrent }) => {
  const { formik } = useFormHook({ setCurrent, current });
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
