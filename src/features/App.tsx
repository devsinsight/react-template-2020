import React from "react";
import HomePage from "./home/components/home-page";
import AboutPage from "./about/components/about-page";
import { Route, Switch } from "react-router-dom";
import Header from "./shared/components/header";
import PageNotFound from "./shared/components/404";
import CoursePage from "./course/components/course-page";

function App() {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/about" component={AboutPage} />
        <Route exact path="/courses" component={CoursePage} />
        <Route component={PageNotFound} />
      </Switch>
    </div>
  );
}

export default App;
