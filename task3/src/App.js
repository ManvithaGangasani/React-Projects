import React from "react";
import Posts from "./posts";
import Comments from "./comments";
import Albums from "./albums";
import Photos from "./photos";
import Home from "./home";
import "./index.css";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";

function App() {
    return (<div>
        <BrowserRouter>
            <h1>API Integration</h1>
            <nav>
                <Link to="/posts">Posts</Link>
                <Link to="/comments">Comments</Link>
                <Link to="/albums">Albums</Link>
                <Link to="/photos">Photos</Link>
            </nav>

            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/posts" element={<Posts />} />
                <Route path="/comments" element={<Comments />} />
                <Route path="/albums" element={<Albums />} />
                <Route path="/photos" element={<Photos />} />
            </Routes>
        </BrowserRouter>
    </div>)
}

export default App;