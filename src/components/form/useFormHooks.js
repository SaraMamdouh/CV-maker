import { initialValues, validationSchema } from "./formik.schema";
import { useDispatch } from "react-redux";
import { addPersonalInfo } from "../../redux/actions";
import { useFormik } from "formik";

export const useFormHook = ({ setCurrent, current }) => {
  const dispatch = useDispatch();

  const onSubmit = (values) => {
    setCurrent(current + 1);
    dispatch(addPersonalInfo(values));
  };

  const formik = useFormik({
    onSubmit,
    validateOnChange: false,
    enableReinitialize: true,
    initialValues,
    validationSchema,
  });

  return { formik };
};
