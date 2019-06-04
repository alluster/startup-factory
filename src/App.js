import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Home from './views/Home';


function App() {
  return (
				<Router>
						<Route path="/" exact component={Home}/>
				</Router>
  );
}

export default App;