import React, { Component } from 'react';
import { BrowserRouter,Route,Switch } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Dashboard from './components/dashboard/Dashboard'
import ProjectDetails from './components/projects/ProjectDetails';
import SignIn from './components/auth/SignIn';
import SignUp from './components/auth/SignUp';
import CreateProject from './components/projects/CreateProject';
import NotFound from './components/error/NotFound';
class App extends Component {
  render() {
    return (
        <BrowserRouter>
           <div className="App">
             <Navbar/>
             <Switch>
               <Route exact path = "/" component = {Dashboard} />
               <Route path = "/project/:id" component = {ProjectDetails}></Route>
               <Route path = "/login" component = {SignIn}></Route>
               <Route path = "/register" component = {SignUp}></Route>
               <Route path = "/create" component = {CreateProject}></Route>
               <Route component = {NotFound}/>

             </Switch>
           </div>
        </BrowserRouter>
    );
  }
}

export default App;
