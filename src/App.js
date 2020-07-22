import React from 'react';
import './App.css';

import Home from './components/Home';
import NavBar from './components/NavBar';


class App extends React.Component{
  render(){
    return (
      <div className="app">
          <NavBar/>
          <div className="container">
            <Home/>
          </div>
      </div>
    ) ;
  }
}

export default App;