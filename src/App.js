import React, { Component } from 'react';
import './App.css';
import Header from "./containers/Header/Header";
import Item from './containers/Item/Item';
import Colors from './containers/Colors/Colors';

class App extends Component {

  render() {
    return (
      <div>
        <Header />
        <Colors />
      </div>
    );
  }
}

export default App;
