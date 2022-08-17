import React, { useState } from 'react';
import { useSignup } from '../hooks/useSignup';
import { useLogin } from '../hooks/useLogin';

function LoginViewport()
{
    const [signEmail, setSignEmail] = useState('');
    const [signPassword, setSignPassword] = useState('');

    const [logEmail, setLogEmail] = useState('');
    const [logPassword, setLogPassword] = useState('');

    const {signup, error, isLoading} = useSignup();
    const {login, _error, _isLoading} = useLogin();


    const handleSubmitSignUp = async (e) => {
        e.preventDefault();
        await signup(signEmail, signPassword);
    }

    const handleSubmitLogin = async (e) => {
        e.preventDefault();
        await login(logEmail, logPassword);
    }

    return (
        <div className='login-screen'>
            <h1>MERN Dating App</h1>
            <h6>The dating app made by two guys</h6>

            <div className='login-container'>
                <h2>Sign up for an account</h2>
                <hr/>
                <form onSubmit={handleSubmitSignUp}>
                    <input 
                        type="email"
                        placeholder="Email"
                        value={signEmail}
                        required={true}
                        onChange={(e) => setSignEmail(e.target.value)}
                    />

                    <input
                        type="password"
                        placeholder='Password'
                        value={signPassword}
                        required={true}
                        onChange={(e) => setSignPassword(e.target.value)}
                    />

                    <input className="submit-button" type="submit" id="signup" disabled={isLoading}/>
                    <p>{error}</p>
                </form>
                <br/>

                <h4>Already have an account? Login</h4>
                <hr/>
                <form onSubmit={handleSubmitLogin}>
                    <input 
                        type="email"
                        placeholder="Email"
                        value={logEmail}
                        required={true}
                        onChange={(e) => setLogEmail(e.target.value)}
                    />

                    <input
                        type="password"
                        placeholder='Password'
                        value={logPassword}
                        required={true}
                        onChange={(e) => setLogPassword(e.target.value)}
                    />

                    <input className="submit-button" type="submit" id="login" disabled={_isLoading}/>
                    <p>{_error}</p>
                </form>
            </div>
        </div>
    )
}
export default LoginViewport;