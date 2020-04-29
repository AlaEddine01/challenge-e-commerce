import React from "react";
import HomePage from "./Pages/HomePage";
import { Route } from "react-router-dom";
import Description from "./Pages/Description";


function App() {
  return <div className="App">
    <Route exact path='/' component={HomePage} />
    <Route exact path='/description/:id' component={Description} />
    
  </div>;
}

export default App;
