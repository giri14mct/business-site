import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import './App.css'
import NavBar from './components/NavBar'
import Home from './components/Home/Home'
import About from './components/About/About'
import Products from './components/Products/Products'
import Enquiry from './components/Enquiry/Enquiry'
const App = () => {
  return (
    <Router>
      <NavBar />
      <Switch>
        <Route path='/' exact component={Home}></Route>
        <Route path='/About' component={About}></Route>
        <Route path='/Products' component={Products}></Route>
        <Route path='/Enquiry' component={Enquiry}></Route>
      </Switch>
    </Router>
  )
}
export default App