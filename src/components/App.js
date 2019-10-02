import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Stocks from "./stocks/Stocks";
import Home from "./home/Home";
import Navigation from "./Navigation";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <React.Fragment>
          <Navigation />
          <Route path="/" exact component={Home} />
          <Route path="/stocks" exact component={Stocks} />
        </React.Fragment>
      </BrowserRouter>
    </div>
  );
};

export default App;
