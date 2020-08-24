import React, { Component } from 'react'
import './App.css';

import firebase from './components/config/firebase'
import SignIn from './components/pages/Signin';
import Home from './components/pages/Home';
import SignUp from './components/pages/Signup';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

class App extends Component {
  constructor(props){
    super(props);
    this.state= {
      user: {},
    }
  }

  componentDidMount(){
    this.authListener()
  }
  authListener(){
    firebase.auth().onAuthStateChanged((user) => {
      if(user){
        this.setState({user})
      } else {
        this.setState({ user: null })
      }
    })
  }
  render(){
    return (
      <div className="App">
      <Router>
        <Switch>
        <Route exact path="/">
            <Home />
          </Route>
          <Route path="/signin">
            <SignIn />
          </Route>
          <Route path="/signup">
            <SignUp />
          </Route>
        </Switch>
      </Router>
        {this.state.user ? (<Home />): (<SignIn />)}
      </div>
    );
  }
}

export default App;
