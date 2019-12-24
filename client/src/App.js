import React from 'react'
import Main from './pages/Main'
import About from './pages/About'
import Sidebar from './components/Sidebar'
import './App.css'
import {
  BrowserRouter as Router, Switch, Route
} from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path='/' component={Main} />
          <Route exact path='/about' component={About} />
        </Switch>
      </Router>
     <Sidebar />
    </div>
  );
}

export default App;
