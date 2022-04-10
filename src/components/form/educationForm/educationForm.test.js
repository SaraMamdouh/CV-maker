import { render, screen } from "@testing-library/react";
import EducationSection from "./EducationForm";

const formik = {
  values: {
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
  },
};

describe("eduction form component", () => {
  it("should render correctly", () => {
    render(<EducationSection formik={formik} />);
    const header = screen.getByText(/Educational Information/i);
    const addSectionButton = screen.getByRole("button");
    const degreeInput = screen.getByTestId("degree");
    const fieldOfStudy = screen.getByTestId("fieldOfStudy");
    const notes = screen.getByTestId("notes");

    screen.debug(degreeInput);
  });
});
