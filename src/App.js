import './App.css';
import React, { Component } from 'react';

import { Switch, Route, Redirect, BrowserRouter as Router} from 'react-router-dom';

import HomePage from './pages/home/home';
import SchedulerPage from './pages/scheduler/scheduler';
import PerfilPage from './pages/perfil/perfil';
import DiagramsPage from './pages/dashboard/dashboard'
import SignInSignUpPage from './pages/signin-signup/signin-signup';

import MenuSideBar from './components/menu-side-bar/menu-side-bar'

//redux
import { connect } from 'react-redux';
import {selectUser} from './redux/user/user.selector'
import {createStructuredSelector} from 'reselect'

class App extends Component {

  render(){

  return (

    <div className='App'>
    <Router>
      <MenuSideBar className='menu'/>

      <div className='content'>
      <Switch >
      
      <Route exact path='/' component={HomePage} />

      <Route path='/perfil' render={ () => this.props.user.name == '' ? 
        (<Redirect to='/'/>) :
        (<PerfilPage />)
      } />

      <Route path='/scheduler' render={ () => this.props.user.name == '' ? 
              (<Redirect to='/'/>) :
              (<SchedulerPage />)
            } />

      <Route path='/dashboard' render={ () => this.props.user.name == '' ? 
              (<Redirect to='/'/>) :
              (<DiagramsPage />)
            } />

      <Route path='/signin-signup' render={ () => this.props.user.name != '' ? 
              (<Redirect to='/'/>) :
              (<SignInSignUpPage />)
      } />
      
      </Switch>
      </div>

    </Router>
    </div>
  );
  }
}


const mapStateToProps = createStructuredSelector({
  user : selectUser
  })

export default connect(mapStateToProps)(App);
