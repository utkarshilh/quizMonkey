import React from 'react'
import { useState } from 'react';
import './LoginPage.css';
export default function LoginPage({ user, onUpdateUser }) {



    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [usertype, setUsertype] = useState("");


    const handleLogin = (e) => {
        e.preventDefault();

        const newUser = 'utkarshilh';
        const userType = 'creater';





        if (newUser !== "") {

            setUsername(newUser);
            setUsertype(userType);

            onUpdateUser({ username, usertype });
        }





    }

    return (
        <div className="login-page"> {/* Add a class to the root element for styling */}
            <form >
                <label>
                    Username:
                    <input type="text" value={username} onChange={
                        (e) => setUsername(e.target.value)} />
                </label>
                <br />
                <label>
                    Password:
                    <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                </label>
                <br />
                <button onClick={handleLogin}>Login</button>
            </form>

        </div>
    )
}
