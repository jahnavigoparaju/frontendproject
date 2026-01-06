import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import "./components/components.css"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./components/Login"
import About from './components/About.js'
import Contact from './components/Contact.js'
import Footer from './components/Footer.js';
import Review from './components/Review.js';
import Home from './components/Home.js';
function App() {
  return (
    <Router>
      <Navbar />
      <Routes> 
        <Route path="/Home" element={<Home/>}/>
        <Route path="/Login" element={<Login/>}/>
        <Route path="/About" element={<About/>}/>
        <Route path="/Contact" element={<Contact/>}/>
        <Route path="/Review" element={<Review/>} />
      </Routes>
      <Footer/>
    </Router>
  );
}

export default App;
