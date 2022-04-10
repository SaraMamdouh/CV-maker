import { Select } from "antd";

function handleChange(value) {
  console.log(`selected ${value}`);
}

const MultipleSelect = ({ name, onChange }) => {
  const { Option } = Select;

  const children = [];
  for (let i = 10; i < 36; i++) {
    children.push(
      <Option key={i.toString(36) + i}>{i.toString(36) + i}</Option>
    );
  }

  return (
    <Select
      mode="multiple"
      name={name}
      allowClear
      style={{ width: "100%" }}
      placeholder="Please select"
      onChange={onChange}
    >
      {children}
    </Select>
  );
};

export default MultipleSelect;
