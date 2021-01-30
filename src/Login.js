import React, { useState } from 'react'
import { useRecoilState } from 'recoil';
import { userState } from './atoms/userState';
import { auth } from "./firebase"

function Login() {
    const [user, setUser] = useRecoilState(userState);

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const login = (e) => {
        e.preventDefault();

        auth.signInWithEmailAndPassword(email, password)
            .then((userAuth) => {
                setUser({
                    email: userAuth.user.email,
                    uid: userAuth.user.uid
                })
            })
            .catch((error) => alert(error))
    }

    return (
        <div className="login">
            <form>
                <input placeholder="Email" onChange={(e) => setEmail(e.target.value)} type="email"/>
                <input placeholder="Password" onChange={(e) => setPassword(e.target.value)} type="password"/>
                <button type="submit" onClick={login}>Login</button>
            </form>
        </div>
    )
}

export default Login
