import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Header from './Components/Header';
import Home from './Components/Home';
import Dashboard from './Components/Dashboard';

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
         
        </Switch>
        </Router>
    </div>
  );
}

export default App;
