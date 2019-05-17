import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { ListPeople } from './star-wars/ListPeople';

function App() {
  return (
    <Router>  
      <Route path="/" exact component={ListPeople} />
      {/* <Route path="/add-lab-result/:id" exact component={addLabResult} /> */}
    </Router>
  );
}

export default App;
