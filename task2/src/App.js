import React from "react";
import Home from "./Home";
import Fruits from "./Fruits";
import Flowers from "./Flowers";
import Contact from "./Contact";
import SignIn from "./SignIn";
import SignUp from "./SignUp";
import About from "./About";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";

let App = () => {
  return (
    <BrowserRouter>
      <div className="app-container">

        <header>
          <h1>360Digrii Basket</h1>
          <h4>Fruits and Flowers</h4>
          <nav>
            <Link to="/">Home</Link> |
            <Link to="/About">About</Link> |
            <Link to="/Contact">Contact</Link> |
            <Link to="/Fruits">Fruits Gallery</Link> |
            <Link to="/Flowers">Flowers Gallery</Link> |
            <Link to="/Signup">SignUp</Link> |
            <Link to="/signin">SignIn</Link>
          </nav>
        </header>

        <hr />

        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/About" element={<About />} />
            <Route path="/Contact" element={<Contact />} />
            <Route path="/Fruits" element={<Fruits />} />
            <Route path="/Flowers" element={<Flowers />} />
            <Route path="/Signup" element={<SignUp />} />
            <Route path="/signin" element={<SignIn />} />
          </Routes>
        </main>

        <hr />

        <footer>
          <div align="center">{'\u00A9'} copyright@FandF</div>
        </footer>
      </div>
    </BrowserRouter>
  );
};

export default App;
