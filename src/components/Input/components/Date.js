import { DatePicker, Space } from "antd";

const Date = ({ onChange }) => {
  return (
    <Space direction="vertical">
      <DatePicker onChange={onChange} />
    </Space>
  );
};
export default Date;
