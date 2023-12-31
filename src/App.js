import {BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom'
import './App.css'
import About from './pages/About/About'
import Home from './pages/Home/Home'
import Apartment from './pages/Apartment/Apartment'
import Error404 from './pages/Error404/Error404'
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/Kasa" element={<Navigate replace to="/" />} />
        <Route path="/" element={<Home />} /> 
        <Route path="/Apartment/:id"  element={<Apartment />} />
        <Route path="/About" element={<About />} />
        <Route path="/*" element={<Error404 />} />   
      </Routes>
      <Footer />
    </Router>
  )
}

export default App;