import {useState} from 'react';
import { useSignup } from '../hooks/useSignup';

function SignupViewport()
{
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [formData, setFormData] = useState({
        firstName: "",
        birthday: "",
        gender: "",
        interest: "",
        about: "",
        profilePicture: ""
    });
    const {signup, error, isLoading} = useSignup();

    const handleSubmit = async (e) => {
        e.preventDefault();
        //console.log(formData);
        await signup(email, password, formData);
    }

    const handleChange = (e) => {
        const value = e.target.type === 'checkbox' ? e.target.checked : e.target.value;
        const name = e.target.name;
        setFormData((prevState) => ({
            ...prevState,
            [name]: value,
        }));
    }

    return (
        <div className='login-screen'>
            <h1>Create User</h1>
            <h6>Please enter your information below</h6>

            <div className='login-container'>
                <h2>Account Information</h2>
                <hr/>
                <form onSubmit={handleSubmit}>
                    <label htmlFor="email">Email Address</label>
                    <input
                        type="email"
                        placeholder="Email"
                        value={email}
                        required={true}
                        onChange={(e) => setEmail(e.target.value)}
                    />

                    <label htmlFor="password">Password</label>
                    <input
                        type="password"
                        placeholder='Password'
                        value={password}
                        required={true}
                        onChange={(e) => setPassword(e.target.value)}
                    />

                    <hr/>
                    <h2>Personal Information</h2>
                    <label htmlFor="firstName">First Name</label>
                    <input
                        type="text"
                        placeholder="First Name"
                        id="firstName"
                        name="firstName"
                        min="2"
                        max="12"
                        required={true}
                        value={formData.firstName}
                        onChange={handleChange}
                    />

                    <label htmlFor="birthday">Birth Date</label>
                    <input
                        type="date"
                        id="birthday"
                        name="birthday"
                        required={true}
                        min="1960-01-01"
                        max="2003-12-31"
                        value={formData.birthday}
                        onChange={handleChange}
                    />

                    <label htmlFor="gender">Gender</label>
                    <div className="radio">
                        <label htmlFor="male">Male</label>
                        <input
                            type="radio"
                            id="male"
                            name="gender"
                            value="male"
                            onChange={handleChange}
                        />
                        <label htmlFor="female">Female</label>
                        <input
                            type="radio"
                            id="female"
                            name="gender"
                            value="female"
                            onChange={handleChange}
                        />
                        <label htmlFor="nonb">Non-Binary</label>
                        <input
                            type="radio"
                            id="nonb"
                            name="gender"
                            value="nonb"
                            onChange={handleChange}
                        />
                        <label htmlFor="not">Prefer not to say</label>
                        <input
                            type="radio"
                            id="not"
                            name="gender"
                            value="not"
                            onChange={handleChange}
                        />
                    </div>

                    <label htmlFor="interest">Interested in</label>
                    <div className="radio">
                        <label htmlFor="male">Male</label>
                        <input
                            type="radio"
                            id="male"
                            name="interest"
                            value="male"
                            onChange={handleChange}
                        />
                        <label htmlFor="female">Female</label>
                        <input
                            type="radio"
                            id="female"
                            name="interest"
                            value="female"
                            onChange={handleChange}
                        />
                        <label htmlFor="nonb">Non-Binary</label>
                        <input
                            type="radio"
                            id="nonb"
                            name="interest"
                            value="nonb"
                            onChange={handleChange}
                        />
                        <label htmlFor="everyone">Everyone</label>
                        <input
                            type="radio"
                            id="everyone"
                            name="interest"
                            value="everyone"
                            onChange={handleChange}
                        />
                    </div>
                    <br/>

                    <h4>About You</h4>
                    <hr/>
                    <label htmlFor="about">Bio</label>
                    <textarea 
                        id="about"
                        name="about"
                        rows="4"
                        maxLength="210"
                        placeholder="Write about yourself"
                        value={formData.about}
                        onChange={handleChange}
                    />

                    <br/>

                    <input className="submit-button" type="submit" disabled={isLoading}/>
                    <p>{error}</p>
                </form>
            </div>
        </div>
    )
}
export default SignupViewport;