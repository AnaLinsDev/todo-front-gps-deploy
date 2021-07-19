import './App.css';
import { Switch, Route, BrowserRouter as Router, Redirect } from 'react-router-dom';
import HomePage from './pages/home/home';
import TodoListPage from './pages/todo-list/todo-list';


function App() {
  return (
    <Router>
      <Switch>
      <Route exact path='/' component={HomePage} />
      <Route exact path='/todo' component={TodoListPage} />
      </Switch>
    </Router>
  );
}

export default App;
