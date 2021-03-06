import React from "react";
import './App.css';

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Incubator from "./Pages/Incubator/Incubator";
import Home from "./Pages/Home/Home";
import LearnPage from "./Pages/LearnPage/LearnPage";
import UserDashboard from './components/UserDashboard/UserDashboard'
import CourseItems from "./components/UserDashboard/CourseItems";
import Navbar from './components/Navbar/Navbar';
import CourseActivities from "./components/UserDashboard/CourseActivities";

function App() {
  return (
    <Router>
      <Navbar></Navbar>
      <Switch>
        <Route path='/incubator'>
          <Incubator></Incubator>
        </Route>
        <Route path='/learnPage'>
         <LearnPage></LearnPage>
        </Route>
        <Route path='/userDashboard/:id'>
         <UserDashboard></UserDashboard>
        </Route>
        <Route path='/courseItem/:_id'>
         <CourseItems></CourseItems>
        </Route>
        <Route path='/courseActivities/:__id'>
         <CourseActivities></CourseActivities>
        </Route>
        <Route exact path='/'>
          <Home></Home>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;