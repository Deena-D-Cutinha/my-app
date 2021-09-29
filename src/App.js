import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Header from "./Components/Header";
import Home from "./Components/Home";
import Dashboard from "./Components/Dashboard";
import Dynamic from "./Components/Dynamic";
import Static from "./Components/Static";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/home">
            <Home />
          </Route>
          <Route exact path="/dashboard">
            <Dashboard />
          </Route>
          <Route exact path="/dynamic">
            <Dynamic />
          </Route>
          <Route exact path="/static">
            <Static />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
