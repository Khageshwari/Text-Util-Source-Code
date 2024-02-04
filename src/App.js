import Aboutus from './Aboutus';
import './App.css';
import Home from './Home';
import {Routes, Route } from "react-router-dom";
import Navbar from './Navbar';
function App() {
  
  return (
      <>
      <Navbar/>
      <Routes>
        <Route path="*" element={<Home />}></Route>
        <Route path="/about" element={<Aboutus />}></Route>
      </Routes>
      </>
    );
}

export default App;
