import React from "react";
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import NavBar from "./components/Navbar";
import Home from "./pages/Home";
import Products from "./pages/Products";
import Massage from "./pages/Massage";
import Team from "./pages/Team";
import Support from "./pages/Support";
import Reports from "./pages/Reports";
import "./App.css";

const App = () => {
  return (
    <>
      <main>
        <Router>
          <NavBar />
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/products" component={Products} />
            <Route path="/team" component={Team} />
            <Route path="/support" component={Support} />
            <Route path="/massage" component={Massage} />
            <Route path="/reports" component={Reports} />
          </Switch>
        </Router>
      </main>
    </>
  );
};

export default App;
