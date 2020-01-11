import { Course } from "../models/course";

export function getCourses() {
  return fetch(
    "https://raw.githubusercontent.com/rrafols/mobile_test/master/data.json"
  )
    .then(response => response.json())
    .then(data => data.Brastlewark.map((m: any) => new Course(m.name)));
}
