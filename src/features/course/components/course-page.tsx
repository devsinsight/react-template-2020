import React, { FunctionComponent, useEffect } from "react";
import { connect } from "react-redux";
import { loadCourses } from "../redux/actions";
import { Course } from "../models/course";
import CourseList from "./course-list";

interface Props {
  loadCourses: Function;
  courses: Array<Course>;
}

interface State {
  course: Course;
  courses: Array<Course>;
}

const CoursePage: FunctionComponent<Props> = ({ loadCourses, courses }) => {
  useEffect(() => {
    loadCourses();
  }, []);

  return <CourseList courses={courses} />;
};

const mapStateToProps = (state: State) => {
  return {
    courses: state.courses
  };
};

const mapDispatchToProps = {
  loadCourses
};

export default connect(mapStateToProps, mapDispatchToProps)(CoursePage);
