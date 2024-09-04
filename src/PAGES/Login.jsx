import React, { useEffect } from 'react'
import '../index'
import { useNavigate } from 'react-router-dom'
import Header from '../component/Header';

function Login() {
    // const login = () => {
    //     localStorage.setItem('login', true);
    //     navigate('/')
    // }
    // const navigate = useNavigate();
    // useEffect(() => {
    //     let login = localStorage.getItem('login');
    //     if (login) {
    //         navigate('/')
    //     }
    // })

    return (
        <>
            <Header />
            <div>
                <h1>Login page</h1>
                <label>name</label>
                <input type='text'></input><br />
                <label>password</label>
                <input type='text'></input><br />
                {/* <button onClick={login}>login</button> */}
            </div>
        </>
    )
}

export default Login
