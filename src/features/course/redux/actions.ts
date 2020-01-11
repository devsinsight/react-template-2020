import { Course } from "../models/course";
import * as type from "./action-types";
import * as service from "../services/service";
import { Dispatch } from "redux";

export function createCourse(course: Course) {
  return { type: type.CREATE_COURSE, course };
}

export function loadCoursesSuccess(courses: Array<Course>) {
  return { type: type.LOAD_COURSES, courses };
}

export function loadCourses() {
  return function(dispatch: Dispatch) {
    return service
      .getCourses()
      .then((courses: Array<Course>) => {
        dispatch(loadCoursesSuccess(courses));
      })
      .catch((error: any) => {
        throw error;
      });
  };
}
