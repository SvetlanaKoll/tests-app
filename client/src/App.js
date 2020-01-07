import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import Main from './pages/Main'
import About from './pages/About'
import Navbar from './components/Navbar'
import Statistics from './pages/Statistics'
import Themes from './pages/Themes'
import Tests from './pages/Tests'
import Questions from './pages/Questions'
import AddTest from './pages/AddTest'
import './App.css'
import {
  BrowserRouter as Router, Switch, Route, Redirect
} from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path='/' component={Main} />
          <Route exact path='/themes' component={Themes} />
          <Route exact path='/statistics' component={Statistics} />
          <Route exact path='/about' component={About} />
          <Route exact path='/add' component={AddTest} />
          <Route exact path='/tests' component={Tests} />
          <Route exact path='/tests/theme/:themeName' component={Tests} />
          <Route exact path='/tests/theme/' render={() => <Redirect to='/tests' />} />
          <Route exact path='/tests/:testId' component={Questions} />
          {/* <Route exact path='/tests/:theme' component={Q} /> */}
        </Switch>
        <Navbar />
      </Router>
      
     
     
    </div>
  );
}

export default App;
