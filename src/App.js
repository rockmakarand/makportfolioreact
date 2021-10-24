

import './App.css';
import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import Contact from './Contact';
import About from './About';
import Navbar from './Navbar';



const App=()=>{
  return (
    
    
  
      <Router>
        <Navbar />
        <main>
        <Switch>
          <Route exact path="/about">
            <About />
          </Route>
          
         
         
          
        </Switch>
        </main>
     
    </Router>
   
    

    
      
    
  );
}


export default App;

