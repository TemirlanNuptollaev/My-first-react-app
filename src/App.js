import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import NaviBar from './Components/NaviBar';
import { Route, Router, Switch } from 'react-router-dom';
import Home from './pages/Home'
import About from './pages/About'
import Users from './pages/Users'



function App() {
  return (
    <>
      <Router>
          <NaviBar/>
          <Switch>
                         <Route path="/" element={Home}/>
                         <Route path="/Users" element={Users}/>
                         <Route path="/About" element={About}/>
          </Switch>
      </Router>
    
      
    </>
  );
}

export default App; 
