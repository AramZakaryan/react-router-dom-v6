import React from 'react';
import './App.css';
import {BrowserRouter, Link, NavLink, Outlet, Route, Routes, useParams} from "react-router-dom";


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
                <Link to={"/"}>main</Link>---
                <NavLink to={"/login"}>login</NavLink>---
                <NavLink to={"/profile"}
                style={({isActive})=>({color:isActive?"red":"green"})}>
                    profile
                </NavLink>---
                <a href={"https://mail.google.com/mail/u/0/#inbox"}
                    target={"_blank"}
                   rel={'noreferrer nofollow noopenner'}
                >other link

                </a>
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
