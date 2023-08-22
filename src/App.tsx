import React from 'react';
import './App.css';
import {BrowserRouter, NavLink, Route, Routes} from "react-router-dom";
import {Profile} from "./ProfileComponent";


function App() {
    return (
        <BrowserRouter>
            <div className="App">
                <NavLink to={"/"}>main</NavLink>---
                <NavLink to={"/login"}>login</NavLink>---
                <NavLink to={"/profile"}>profile</NavLink>
                <Routes>
                    <Route path={"/"} element={<div>This is the Main Page</div>}/>
                    <Route path={"/login"} element={<div>This is the Login Page</div>}/>
                    <Route path={"/profile"} element={<div> This is the Profile Page</div>}/>
                    <Route path={"/profile/:id"} element={<Profile/>}/>
                </Routes>
            </div>
        </BrowserRouter>
    );
}

export default App;
