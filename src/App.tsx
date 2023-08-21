import React from 'react';
import './App.css';
import {
    BrowserRouter,
    Link,
    NavLink,
    Outlet,
    Route,
    Routes,
    useNavigate,
    useParams,
    useSearchParams
} from "react-router-dom";


const Profile = () => {
    const [searchParams, setSearchParams] = useSearchParams()
    console.log(searchParams.get("age"))
    console.log(Object.fromEntries(searchParams))
    return (
        <div>
            <div>This is the Profile Page</div>
            <button onClick={()=>setSearchParams({name:"Gago",age: "32", city:"Yerevan"})}>search</button>
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
