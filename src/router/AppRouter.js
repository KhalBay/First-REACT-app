import React, {useContext} from "react";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import {AuthContext} from "../context";
import Login from "../pages/Login";
import Contact from "../pages/Contact";

function AppRouter() {

    const {isAuth, setIsAuth} = useContext(AuthContext)

    return (
        isAuth
            ?
            <BrowserRouter>
                <Routes>
                    <Route path='/contact' element={<Contact/>}/>
                    <Route path='/*' element={<Contact/>}/>
                </Routes>
            </BrowserRouter>
            :
            <BrowserRouter>
                <Routes>
                    <Route path='/login' element={<Login/>}/>
                    <Route path='/*' element={<Login/>}/>
                </Routes>
            </BrowserRouter>
    )
}

export default AppRouter;

