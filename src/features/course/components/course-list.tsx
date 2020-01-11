import React, { FunctionComponent } from "react";
import { Course } from "../models/course";

interface Props {
  courses: Array<Course>;
}

const CourseList: FunctionComponent<Props> = ({ courses }) => (
  <ol>
    {courses.map((course: Course) => (
      <li key={course.title}>{course.title}</li>
    ))}
  </ol>
);

export default CourseList;
