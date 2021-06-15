import "./App.css";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import Navbar from './components/Navbar/Navbar';

function App() {
   return (
     <Router>
       <Navbar></Navbar>
       {/* <Switch>
         <Route path="/incubator">
           <Incubator></Incubator>
         </Route>
         <Route path="/learnPage">
           <LearnPage></LearnPage>
         </Route>
         <Route path="/userDashboard/:id">
           <UserDashboard></UserDashboard>
         </Route>
         <Route path="/courseItem/:_id">
           <CourseItems></CourseItems>
         </Route>
         <Route path="/courseActivities/:__id">
           <CourseActivities></CourseActivities>
         </Route>
         <Route exact path="/">
           <Home></Home>
         </Route>
       </Switch> */}
     </Router>
   );
}

export default App;
