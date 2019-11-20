import React from 'react';
import { Link, BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Dashboard from './pages/Dashboard';

const App: React.FC = () => {
  return (
    <Router>
      <header>
        <h1>React Router</h1>
        <nav>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/dashboard/es6">Dashboard zu ES 6</Link></li>
            <li><Link to="/dashboard/react">Dashboard</Link></li>
            <li><Link to="/dashboard/redux">Dashboard</Link></li>
            <li><Link to="/dashboard/router">Dashboard</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><a href="/about">About ohne Routing</a></li>
          </ul>
        </nav>
      </header>
      <main>
        <Switch>
        <Route exact path="/">
            <Home/>
          </Route>
          <Route path="/about">
            <About/>
          </Route>
          <Route path="/dashboard/:topic">
            <Dashboard/>
          </Route>
        </Switch>
      </main>
    </Router>
  );
}

export default App;
