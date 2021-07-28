import './App.css';
import { Switch, Route, BrowserRouter as Router} from 'react-router-dom';
import HomePage from './pages/home/home';
import TodoListPage from './pages/todo-list/todo-list';
import PerfilPage from './pages/perfil/perfil';
import DiagramsPage from './pages/dashboard/dashboard'
import SignInSignUpPage from './pages/signin-signup/signin-signup';

import MenuSideBar from './components/menu-side-bar/menu-side-bar'

function App() {
  return (
    <div className='App'>
    <Router>
      <MenuSideBar className='menu'/>

      <div className='content'>
      <Switch >
      
      <Route exact path='/' component={HomePage} />
      <Route exact path='/perfil' component={PerfilPage} />
      <Route exact path='/planner' component={TodoListPage} />
      <Route exact path='/dashboard' component={DiagramsPage} />
      <Route exact path='/signin-signup' component={SignInSignUpPage} />
      
      </Switch>
      </div>

    </Router>
    </div>
  );
}

export default App;
