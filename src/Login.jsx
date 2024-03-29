import React from 'react';
import { useNavigate } from 'react-router-dom';

export const Login = (props) => {
    const {credentials} = props;
    const {username,password} = credentials;

    const navigate = useNavigate();

    const LoggingIn = (e) => {
        e.preventDefault();
        
        if (username === "username" && password === "password") {
            navigate("/props");
        } else {
            alert("Invalid credentials");
        }
    };

    return (
        <div>
            <h3>Login Component</h3>
            <form onSubmit={LoggingIn}>
                <label htmlFor="username">Username</label>
                <input type="text" id="username" placeholder="Enter name here" name="username" />
                <label htmlFor="password">Password</label>
                <input type="password" id="password" placeholder="Enter password here" name="password" />
                <button type="submit">Login</button>
            </form>
        </div>
    );
};
