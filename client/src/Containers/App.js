import React from 'react';
import { Provider } from "react-redux";
import { configureStore } from "../Store";
import {BrowserRouter as Router} from "react-router-dom";
import Main from "./Main";

const store = configureStore();

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Main />
      </Router>
    </Provider>
      
  );
}

export default App;
