import React from "react";
import { Steps } from "antd";
import { Col } from "react-bootstrap";
import "antd/dist/antd.css";
import { steps } from "./constants";
import CvForm from "./form";

const Header = ({ generate }) => {
  const { Step } = Steps;
  const [current, setCurrent] = React.useState(0);

  const IconComponent = (props) => {
    const Icon = props.icon;
    return <Icon />;
  };

  return (
    <>
      <Steps current={current}>
        {steps.map((item, index) => (
          <Step
            key={index}
            title={item.title}
            icon={<IconComponent icon={item.icon} />}
          />
        ))}
      </Steps>
      <Col className="mt-5">
        <div className="steps-content">
          <CvForm
            generate={generate}
            current={current}
            setCurrent={setCurrent}
          />
        </div>
      </Col>
    </>
  );
};

export default Header;
