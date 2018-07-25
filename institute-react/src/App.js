import React, { Component } from 'react';
import './App.css';
import Routes from "./route";
import { createStore,applyMiddleware } from "redux";
import { Provider } from "react-redux";
import thunk from 'redux-thunk';


import { addDataToView } from "./reducers";

const store=createStore(
          addDataToView,
          applyMiddleware(thunk),
          window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

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
