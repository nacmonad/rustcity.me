import React from 'react';
import './App.css';

import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import { CSSTransition } from 'react-transition-group'

import Splash from './components/pages/Splash';
import Home from './components/pages/Home';

const styles = {
  root:{
    display:'flex',
    alignItems:'center',
    justifyContent:'center',
    width:'100%',
    height:'100%'
  },
}

const routes = [
  { path: '/', name: 'Splash', Component: Splash },
  { path: '/home/:language', name: 'Home', Component: Home },
]

function App() {
  return (
  <div className="App" style={styles.root}>
    <Router>
      {routes.map(({ path, Component }) => (
          <Route key={path} exact path={path}>
            {({ match }) => (
              <CSSTransition
                in={match != null}
                timeout={300}
                classNames="page"
                unmountOnExit
              >
                <div className="page">
                  <Component />
                </div>
              </CSSTransition>
            )}
          </Route>
          ))}

    </Router>
    </div>
  );
}

export default App;
