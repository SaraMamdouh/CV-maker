import { ADD_PERSONAL_INFO, ADD_EDUCATION_INFO } from "./types";

export const addPersonalInfo = (data) => {
  return {
    type: ADD_PERSONAL_INFO,
    payload: data,
  };
};

export const addEducationInfo = (data) => {
  return {
    type: ADD_EDUCATION_INFO,
    payload: data,
  };
};
