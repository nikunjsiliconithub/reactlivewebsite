import logo from './logo.svg';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import './App.css';
import Home from "./Home"
import About from "./About"
import Service from "./Service"
import Contact from "./Contact"
import { Redirect, Route, Switch } from 'react-router';
import Navbar from './Navbar'
import Footer from './Footer'

function App() {
  return (
    <div className="App">
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route exact path="/About" component={About}/>
        <Route exact path="/Service" component={Service}/>
        <Route exact path="/Contact" component={Contact}/>
        <Redirect to="/" />
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
