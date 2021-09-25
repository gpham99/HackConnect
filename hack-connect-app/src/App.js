import './App.css';
import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import NavBar from './components/layout/NavBar';
import LogIn from './components/auth/LogIn'
import SignUp from './components/auth/SignUp'

const App = () => {
  return (
    <div className="App">
      <Router>
        <NavBar></NavBar>

        <section className="container">
          <Switch>
            <Route exact path='/' component={LogIn}/>
            <Route exact path='/signup' component={SignUp}/>
            <Route exact path='/login' component={LogIn}/>
          </Switch>
        </section>
      </Router>
    </div>
  );
}

export default App;