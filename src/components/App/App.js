import React, {useState, useEffect} from 'react';
import './App.css'
import {AuthContext} from "../../context";
import AppRouter from "../../router/AppRouter";

function App() {

    const [isAuth, setIsAuth] = useState(false)

    return (
        <AuthContext.Provider value={{
            isAuth,
            setIsAuth
        }}>
            <AppRouter/>
        </AuthContext.Provider>
    )
}

export default App;