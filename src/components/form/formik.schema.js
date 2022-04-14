import * as Yup from "yup";

export const initialValues = {
  firstName: "",
  lastName: "",
  summary: "",
  address: "",
  phone: "",
  email: "",
  education: [
    {
      degree: "",
      fieldOfStudy: "",
      notes: "",
      schoolName: "",
      startDate: "",
      endDate: "",
    },
  ],
};

export const validationSchema = Yup.object({
  firstName: Yup.string().required("this field is required"),
  lastName: Yup.string().required("this field is required"),
  summary: Yup.string(),
  address: Yup.string().required("this field is required"),
  phone: Yup.string()
    .matches(
      /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/,
      "phone number is invalid."
    )
    .required("this field is required"),
  email: Yup.string().email("invalid email").required("this field is required"),
  education: Yup.array(),
});
