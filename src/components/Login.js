import React, {SyntheticEvent, useState} from 'react';
import {Redirect} from "react-router-dom";
import { Link } from "react-router-dom"
import "./login.css"
const Login = (props: { setName: (name: string) => void }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [redirect, setRedirect] = useState(false);

    const submit = async (e: SyntheticEvent) => {
        e.preventDefault();

        const response = await fetch('http://localhost:8080/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'},
            credentials: 'include',
            body: JSON.stringify({
                email,
                password
            })
        });

        const content = await response.json();

        setRedirect(true);
        props.setName(content.name);
    }

    if (redirect) {
        return <Redirect to="/"/>;
    }

    return (
        <div id="login-form-wrap">
  <h2>Login</h2>
  <form id="login-form" onSubmit={submit}>
  <p>
    <input type="email" className="form-control" placeholder="Email address" required
                   onChange={e => setEmail(e.target.value)}/>
    <i class="validation"><span></span><span></span></i>
    </p>
    <p>
    <input type="password" className="form-control" placeholder="Password" required
                   onChange={e => setPassword(e.target.value)}/>
    <i class="validation"><span></span><span></span></i>
    </p>

    <p>
    <input type="submit" id="login" value="Login"/>
    </p>
  </form>
  <div id="create-account-wrap">
    <p/>Not a member?
    <li><Link to="/register">Create Account</Link></li>
  </div>
</div>
    
    );
};

export default Login;
