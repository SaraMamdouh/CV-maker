import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import EducationSection from "./EducationForm";
import { initialValues, validationSchema } from "../formik.schema";
import { useFormik } from "formik";
import { renderHook } from "@testing-library/react-hooks";

let component = {},
  formik = {};

formik = renderHook(() =>
  useFormik({
    onSubmit: jest.fn(),
    validateOnChange: false,
    enableReinitialize: true,
    initialValues,
    validationSchema,
  })
).result.current;

const renderComponent = (formik) => {
  render(<EducationSection formik={formik} />);
};

const initializeComponent = () => {
  const header = screen.getByText(/Educational Information/i);
  const addSectionButton = screen.getByRole("button");
  const degreeInput = screen.getByTestId("degree");
  const fieldOfStudy = screen.getByTestId("fieldOfStudy");
  const notes = screen.getByTestId("notes");
  const schoolName = screen.getByTestId("schoolName");
  const startDate = screen.getByTestId("startDate");
  const endDate = screen.getByTestId("endDate");
  component = {
    header,
    addSectionButton,
    degreeInput,
    fieldOfStudy,
    notes,
    schoolName,
    startDate,
    endDate,
  };
};

describe("eduction form component", () => {
  beforeEach(() => {
    renderComponent(formik);
    initializeComponent();
  });
  it("should render correctly", () => {
    expect(component.header).toBeInTheDocument();
    expect(component.addSectionButton).toBeInTheDocument();
    expect(component.degreeInput).toBeInTheDocument();
    expect(component.fieldOfStudy).toBeInTheDocument();
    expect(component.notes).toBeInTheDocument();
    expect(component.schoolName).toBeInTheDocument();
    expect(component.startDate).toBeInTheDocument();
    expect(component.endDate).toBeInTheDocument();
  });

  it("should add section on click on add section Button", async () => {
    const eductionDefaultValues = {
      degree: "",
      fieldOfStudy: "",
      notes: "",
      schoolName: "",
      startDate: "",
      endDate: "",
    };
    formik.setFieldValue = jest.fn();
    renderComponent(formik);
    await waitFor(() => fireEvent.click(component.addSectionButton));
    expect(formik.setFieldValue).toHaveBeenCalled();
    expect(formik.setFieldValue).toHaveBeenCalledWith("education", [
      ...formik.values.education,
      eductionDefaultValues,
    ]);
    renderComponent(formik);
    // console.log(formik.values.education);
    //expect(formik.values.education.length).toBe(2);
  });
});
