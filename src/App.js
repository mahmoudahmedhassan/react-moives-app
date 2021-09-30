import React from "react";
import { Provider } from "react-redux";
import {  HashRouter as Router,Route} from "react-router-dom";
import store from "./reducers/store";

import Header from "./components/layout/header/Header";
import Footer from "./components/layout/footer/Footer";
import Landing from "./components/home/Landing";
import Moviedetails from './components/home/Moviedetails'

import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <Provider store={store}>
      <Router>
        <div className="App">
          <Header />
          <Route exact path="/" component={Landing}/>
          
          <Route exact path="/Moviedetails/:id"  component ={Moviedetails}/>
          {/* <Landing /> */}
          <Footer />
        </div>
      </Router>
    </Provider>
  );
}

export default App;
