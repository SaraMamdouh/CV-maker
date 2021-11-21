import { ADD_EDUCATION_INFO, ADD_PERSONAL_INFO } from "./types";

const initialState = {
  PersonalInfo: {},
};

const infoReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_PERSONAL_INFO: {
      return {
        ...state,
        PersonalInfo: action.payload,
      };
    }
    case ADD_EDUCATION_INFO: {
      return {
        ...state,
        EducationInfo: action.payload,
      };
    }
  }
};

export default infoReducer;
