import React, {useContext, useState} from 'react';
import MyInput from "../components/UI/MyInp/MyInput";
import MyBtn from "../components/UI/MyBtn/MyBtn";
import ErrorText from "../components/UI/MyError/ErrorText";
import {AuthContext} from "../context";
import './Login.css';

function Login() {

    const {isAuth, setIsAuth} = useContext(AuthContext)

    const [userName, setUserName] = useState('')

    const [userPassword, setUserPassword] = useState('')

    const [validInput, setValidInput] = useState(null)

    const login = event => {
        event.preventDefault();
        setValidInput(false)
        if (userName === 'admin' && userPassword === '123') {
            setIsAuth(true)
        }
    }


    return (
        <div className="Login">
            <div>
                <h1>Войдите на сайт чтобы просмотреть список контактов</h1>
                <form onSubmit={login}>
                    <MyInput onChange={e => setUserName(e.target.value)} value={userName} type="text"
                             placeholder='Введите логин'/>
                    <MyInput onChange={e => setUserPassword(e.target.value)} value={userPassword} type="password"
                             placeholder='Введите пароль' autoComplete='off'/>
                    <MyBtn>Вход</MyBtn>
                </form>
                <div className='error'>
                    {validInput === false
                        ?
                        <ErrorText/>
                        :
                        null
                    }
                </div>
            </div>
        </div>
    )
}

export default Login;