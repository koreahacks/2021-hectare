import React from "react";
import { Link, Route } from "react-router-dom";
import Home from "./pages/Home";
import HBTItest from "./pages/HBTItest";
import HelchangTest from "./pages/HelchangTest";
import "./App.scss";

const App = () => {
  return (
    <div className="main-container">
      <Link to={"/"}>
        <h2 id="main-title">HBTI</h2>
      </Link>
      <div className="content">
        <Route path="/" exact={true} component={Home} />
        <Route path="/hbti-test" component={HBTItest} />
        <Route path="/helchang-ability-test" component={HelchangTest} />
      </div>
    </div>
  );
};
export default App;
