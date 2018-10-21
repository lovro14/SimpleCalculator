import React, { Component } from "react";
import "./App.css";
import Calculator from "./components/calculator/Calculator";
import { Route, Switch } from "react-router-dom";
import AsyncComponent from "./hoc/asyncComponent/AsyncComponent";
import NavBar from "./components/layout/nabar/Navbar";
import Footer from "./components/layout/footer/Footer";

const asyncNotFound = AsyncComponent(() => {
  return import("./components/notFound/NotFound");
});

class App extends Component {
  render() {
    return (
      <div className="SimpleCalculator">
        <NavBar />
        <Switch>
          <Route exact path="/" component={Calculator} />
          <Route path="*" component={asyncNotFound} />
        </Switch>
        <Footer />
      </div>
    );
  }
}

export default App;
