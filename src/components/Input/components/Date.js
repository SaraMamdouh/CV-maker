import { DatePicker, Space } from "antd";

const Date = ({ onChange, testId }) => {
  return (
    <Space direction="vertical">
      <DatePicker onChange={onChange} data-testid={testId} />
    </Space>
  );
};
export default Date;
