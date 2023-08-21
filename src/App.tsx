import React from 'react';
import './App.css';
import {BrowserRouter, NavLink, Outlet, Route, Routes, useParams} from "react-router-dom";


const Profile = () => {
    const params = useParams()
    return (
        <div>
            <span>This is the Profile Page</span> <br/>
            <span>id is {params.id}</span>
        </div>
    )
}

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
