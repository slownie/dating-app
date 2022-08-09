import React, { useState } from 'react';
import {useNavigate} from 'react-router-dom';
function LoginViewport()
{
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [error, setError] = useState(null);

    let navigate = useNavigate();

    const handleSubmitSignUp = async (e) => {
        e.preventDefault();

        // Password check
        try {
            // if (password !== confirmPassword) {
            //     setError("Passwords need to match!");
            //     return;
            // }
            console.log(JSON.stringify({email, password}));
            const response = await fetch("/api/users/signup", {
                method: 'Post',
                body: JSON.stringify({email, password})
            });
            
            console.log(response.json());
            if (response) navigate('/create');

        } catch (error) {
            console.log(error);
        }
    }

    const handleSubmitLogin = (e) => {
        e.preventDefault();

        navigate('/search');
        return;
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
                        id="email"
                        name="email"
                        placeholder="Email"
                        value={email}
                        required={true}
                        onChange={(e) => setEmail(e.target.value)}
                    />

                    <input
                        type="password"
                        id="password"
                        name="password"
                        placeholder='Password'
                        value={password}
                        required={true}
                        onChange={(e) => setPassword(e.target.value)}
                    />

                    {/* <input
                        type="password"
                        id="password-check"
                        name="password-check"
                        placeholder="Confirm Password"
                        value={confirmPassword}
                        required={true}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                    /> */}
                    <input className="submit-button" type="submit" id="signup"/>
                    <p>{error}</p>
                </form>
                <br/>

                {/* <h4>Already have an account? Login</h4>
                <hr/>
                <form onSubmit={handleSubmitLogin}>
                    <input 
                        type="email"
                        id="email"
                        name="email"
                        placeholder="Email"
                        required={true}
                        onChange={(e) => setEmail(e.target.value)}
                    />

                    <input
                        type="password"
                        id="password"
                        name="password"
                        placeholder='Password'
                        required={true}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <input className="submit-button" type="submit" id="login"/>
                </form> */}
            </div>
        </div>
    )
}
export default LoginViewport;