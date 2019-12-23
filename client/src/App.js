import React from 'react'
import Main from './pages/Main'
import About from './pages/About'
import Sidebar from './components/Sidebar'
import './App.css'
import {
  BrowserRouter as Router, Route
} from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <Router>
        {/* <Route path='/' component={Main}>
          <Main />
        </Route> */}
        
        <Route path='/about' component={About}>
          <About />
        </Route>
     </Router>
     <Sidebar />
    </div>
  );
}

export default App;
