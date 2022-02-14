import './App.css';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink
} from "react-router-dom";

// pages import

import Home from './components/Home'
import About from './components/About'
import Users from './components/Users'
import User from './components/User'
import Error404 from './components/Error404'


function App() {
  return (
<Router>
      <div>
        <nav>
          <ul>
            <li>
              <NavLink to="/" exact activeClassName>Home</NavLink>
            </li>
            <li>
              <NavLink to="/about" activeClassName>About</NavLink>
            </li>
            <li>
              <NavLink to="/users" activeClassName>Users</NavLink>
            </li>
          </ul>
        </nav>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/" exact component={Home}/>
          <Route path="/about" component={About}/>
          <Route path="/users" component={Users}/>  
          <Route path="/user/:id" component={User}/>
          <Route path="*" component={Error404} />
        </Switch>
      </div>
    </Router>
  );
}


export default App;
