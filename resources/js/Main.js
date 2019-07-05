import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Link
} from 'react-router-dom';
import Home from './pages/Home';
// import About from './About';
import Login from './pages/Login';
// import NotFound from './NotFound';
// import restricted from './Restricted';

const MainApp = () => (
  <Router>
    <div>
      {/* <header>
        <Link to="/home">Home</Link>
        {' '}
        <Link to="/">Login</Link>
        {' '}
        <strong>TaskLaraReact</strong>
      </header> */}
      <main>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/home" component={Home} />
          <Route path="/" component={Login} />
          <Route component={Login} />
        </Switch>
      </main>
    </div>
  </Router>
);

export default MainApp;
