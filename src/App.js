import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import NavBarCustom from './NavBarCustom';
import ContainerCustom from './ContainerCustom';

class App extends Component {
  render() {
    return (
      // <div className="App">
      //   <header className="App-header">

      //   </header>
      // </div>
     <div>  
       <NavBarCustom></NavBarCustom>     
       <ContainerCustom></ContainerCustom>
     </div>
      
    );
  }
}

export default App;

