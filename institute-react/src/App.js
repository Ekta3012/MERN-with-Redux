import React, { Component } from 'react';
import './App.css';
import Routes from "./route";
import { Provider } from "react-redux";

import configureStore from "./middleware";


const store=configureStore();

class App extends Component {
  render() {
    return (
      <div className="App">
        <Provider store={store}>
          <Routes/>
        </Provider>
      </div>
    );
  }
}

export default App;
