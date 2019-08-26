import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Home from './views/Home';
import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  body {
	margin: 0px !important;
	font-family: montserrat;
	root: 18px;
  };
  ul {
	list-style-position: inside;
	padding: 0
  }
  li {
	  font-size: 0.8rem
	  margin: 0
  }
`

function App() {
  return (
	<Router>
		<GlobalStyle />
		<Route path="/" exact component={Home}/>
	</Router>
			
  );
}

export default App;
