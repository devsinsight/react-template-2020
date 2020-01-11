import * as type from "./action-types";

const initialState = {
  courses: [],
  course: {}
};

export default function courseReducer(state: any, action: any) {
  state = state || initialState;
  switch (action.type) {
    case type.CREATE_COURSE:
      return Object.assign({}, state, {
        courses: state.courses.concat(action.course)
      });
    case type.LOAD_COURSES: {
      return Object.assign({}, state, {
        courses: action.courses
      });
    }
    default:
      return state;
  }
}
