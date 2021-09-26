import './App.css';
import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import NavBar from './components/layout/NavBar';
import LogIn from './components/auth/LogIn'
import SignUp from './components/auth/SignUp'
import MyProfile from './components/profile/MyProfile'
import UserProfile from './components/profile/UserProfile'

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
            <Route exact path='/me' component={MyProfile}></Route>
            <Route exact path='/user' component={UserProfile}></Route>
          </Switch>
        </section>
      </Router>
    </div>
  );
}

export default App;