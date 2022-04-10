import InputGroup from "../Input";

const Achievements = ({ formik }) => {
  return (
    <InputGroup
      xs={12}
      type="MultipleSelect"
      name="skills"
      formik={formik}
      label="skills"
    />
  );
};

export default Achievements;
