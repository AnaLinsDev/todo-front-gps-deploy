import './App.css';
import React, { Component } from 'react';

import { Switch, Route, BrowserRouter as Router} from 'react-router-dom';
import HomePage from './pages/home/home';
import SchedulerPage from './pages/scheduler/scheduler';
import PerfilPage from './pages/perfil/perfil';
import DiagramsPage from './pages/dashboard/dashboard'
import SignInSignUpPage from './pages/signin-signup/signin-signup';
import MenuSideBar from './components/menu-side-bar/menu-side-bar'



class App extends Component {

  render(){

  return (

    <div className='App'>
    <Router>
      <MenuSideBar className='menu'/>

      <div className='content'>
      <Switch >
      
      <Route exact path='/' component={HomePage} />
      <Route exact path='/perfil' component={PerfilPage} />
      <Route exact path='/scheduler' component={SchedulerPage} />
      <Route exact path='/dashboard' component={DiagramsPage} />
      <Route exact path='/signin-signup' component={SignInSignUpPage} />
      
      </Switch>
      </div>

    </Router>
    </div>
  );
  }
}




export default (App);
