// import logo from './logo.svg';
import React from 'react'
// import ReactDOM from 'react-dom'
import {BrowserRouter as Router, Route,Routes } from 'react-router-dom'
import './App.css'
import About from './pages/About'
import Header from './components/Header'
import Home from './pages/Home'


// import Error404 from './pages/Error404';

function App() {
  return (
      <Router>
        <Header />
        <Routes>
          <Route path="/" element= {<Home />} />
          <Route path="/About" element= {<About />} />
        </Routes>
      </Router>
  )
}

export default App;



/* <div className="App"> 
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
</header> */