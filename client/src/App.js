import React from 'react'
import Main from './pages1/Main'
import About from './pages1/About'
import Sidebar from './components/Sidebar'
import './App.css'
import {
  BrowserRouter as Router, Route
} from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <Router>
        <Route path='/'>
          <Main />
        </Route>
        <Sidebar />
        <Route path='/about'>
          <About />
        </Route>
     </Router>
    </div>
  );
}

export default App;
