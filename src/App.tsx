import React from 'react';
import './App.css';
import {BrowserRouter, Link, NavLink, Outlet, Route, Routes, useNavigate, useParams} from "react-router-dom";


const Profile = () => {
    const navigate = useNavigate()
    return (
        <div>
            <div>This is the Profile Page</div>
            <button onClick={()=>navigate(-1)}>go to login</button>
        </div>
    )
}

function App() {
    return (
        <BrowserRouter>
            <div className="App">

                <NavLink to={"/"}>main</NavLink>---
                <NavLink to={"/login"}>login</NavLink>---
                <NavLink to={"/profile"}>profile </NavLink>

                <Routes>
                    <Route path={"/"} element={<div>This is the Main Page</div>}/>
                    <Route path={"/login"} element={<div>This is the Login Page</div>}/>
                    <Route path={"/profile"} element={<Profile/>}/>
                </Routes>

            </div>
        </BrowserRouter>
    );
}

export default App;
