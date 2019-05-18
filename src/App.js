import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch} from "react-router-dom";
import { ListPeople } from './star-wars/ListPeople';
import { DetailPeople } from './star-wars/DetailPeople';

function App() {
  return (
    <div>
      <Router>  
        <Switch>
          <Route path="/" exact component={ListPeople} />
          <Route path="/detail/:id" exact component={DetailPeople} />
        </Switch>
      </Router>
    </div>
    
  );
}

export default App;
