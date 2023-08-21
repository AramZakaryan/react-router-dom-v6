import React from 'react';
import './App.css';
import {BrowserRouter, NavLink, Outlet, Route, Routes, useParams} from "react-router-dom";


const Profile = () => {
    const params = useParams<"id1" | "id2">()
    return (
        <div>
            <span>This is the Profile Page</span> <br/>
            <span>id is {params.id1} and {params.id2}</span>
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
                    <Route path={"/profile/:id1/:id2"} element={<Profile/>}/>
                </Routes>
            </div>
        </BrowserRouter>
    );
}

export default App;
