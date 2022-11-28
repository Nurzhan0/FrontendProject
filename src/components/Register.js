import React, {SyntheticEvent, useState} from 'react';
import {Redirect} from 'react-router-dom';
import "./register.css"
const Register = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [redirect, setRedirect] = useState(false);

    const submit = async (e: SyntheticEvent) => {
        e.preventDefault();

        await fetch('http://localhost:8080/register', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'},
            body: JSON.stringify({
                name,
                email,
                password
            })
        });

        setRedirect(true);
    }

    if (redirect) {
        return <Redirect to="/login"/>;
    }

    return (
        <div id="login-form-wrap">
  <h2>Sign in</h2>
  <form id="login-form" onSubmit={submit}>
  <p>
    <input type="text" className="form-control" placeholder="Name" required
                   onChange={e => setName(e.target.value)}/>
    </p>
  <p>
    <input type="email" className="form-control" placeholder="Email address" required
                   onChange={e => setEmail(e.target.value)}/>
    <i class="validation"></i>
    </p>
    <p>
    <input type="password" className="form-control" placeholder="Password" required
                   onChange={e => setPassword(e.target.value)}/>
    <i class="validation"></i>
    </p>

    <p>
    <input type="submit" id="SignIn" value="Sumbit"/>
    </p>
  </form>
</div>
    
    );
};

export default Register;
