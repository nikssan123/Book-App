import React from 'react';
import './App.css';
import { Route, Redirect} from "react-router-dom";
import FormContainer from "./Components/Form/FormContainer";
import Footer from "./Components/Footer";

function App() {
  return (
    <div className="App">
      <Route to="/new" component={FormContainer} />
      <Route to="/" render={() => <Redirect to="/new"/>} />
      <Footer/>
    </div>
  );
}

export default App;
