import React from 'react';
import './App.css';

import { BrowserRouter as Router, Route, Link } from "react-router-dom";

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

function App() {
  return (
  <div className="App" style={styles.root}>
    <Router>
        <Route exact path="/" component={Splash} />
        <Route path="/home/:language" component={Home} />
    </Router>
    </div>
  );
}

export default App;
