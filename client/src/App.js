import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import Main from './pages/Main'
import About from './pages/About'
import Navbar from './components/Navbar'
import Statistics from './pages/Statistics'
import Topics from './pages/Topics'
import Tests from './pages/Tests'
import Questions from './pages/Questions'
import AddTest from './pages/AddTest'
import Results from './pages/Results'
import './App.css'
import {
  BrowserRouter as Router, Switch, Route, Redirect
} from 'react-router-dom'
import history from './utils/history'
import PrivateRoute from './components/PrivateRoute'

function App () {
  return (
    <div className='App'>
      <Router history={history}>
        <Switch>
          <Route exact path='/' component={Main} />
          <Route exact path='/topics' component={Topics} />
          <Route exact path='/statistics' component={Statistics} />
          <Route exact path='/about' component={About} />
          <PrivateRoute
            exact
            path='/add'
            render={() => <AddTest />}
            requiredScope={['create:tests']}
          />
          <Route exact path='/tests' component={Tests} />
          <Route exact path='/tests/topic/:topicId' component={Tests} />
          <Route exact path='/tests/topic/' render={() => <Redirect to='/tests' />} />
          <Route exact path='/tests/:testId' component={Questions} />
          <Route exact path='/results/:resultId' component={Results} />
          {/* <Route exact path='/tests/:theme' component={Q} /> */}
        </Switch>
        <Navbar />
      </Router>

    </div>
  )
}

export default App
