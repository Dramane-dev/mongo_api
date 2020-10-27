import './App.css';
import Navbar from './Components/index'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Users from './pages/users';
import Movies from './pages/movies';
import CreateUsers from './pages/createUsers';

function App() {
  return (
    <>
    <Router>
      <Navbar />
        <Switch>
          <Route path='/users' component={Users} />
          <Route path='/movies' component={Movies} />
          <Route path='/createUsers' component={CreateUsers} />
        </Switch>
    </Router>
      <h1>Welcom to my MONGO API</h1>
    </>
  );
}

export default App;
