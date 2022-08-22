import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useLogin } from '../hooks/useLogin';

function LoginViewport()
{

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const {login, error, isLoading} = useLogin();

    const handleSubmit = async (e) => {
        e.preventDefault();
        await login(email, password);
    }

    return (
        <div className='login-screen'>
            <h1>MERN Dating App</h1>
            <h6>The dating app made by two guys</h6>

            <div className='login-container'>
                <h2>Log in to your account</h2>
                <hr/>
                <form onSubmit={handleSubmit}>
                    <input 
                        type="email"
                        placeholder="Email"
                        name="Email"
                        value={email}
                        required={true}
                        onChange={(e) => setEmail(e.target.value)}
                    />

                    <input
                        type="password"
                        placeholder='Password'
                        name="Password"
                        value={password}
                        required={true}
                        onChange={(e) => setPassword(e.target.value)}
                    />

                    <input className="submit-button" type="submit" id="signup" disabled={isLoading}/>
                    <p>{error}</p>
                </form>
                <br/>

                <h5>Don't have an account? <Link to="/signup">Sign Up</Link></h5> 
            </div>
        </div>
    )
}
export default LoginViewport;