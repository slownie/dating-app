import { useState } from "react"
import { useNavigate } from "react-router-dom"

export default function CreationViewport()
{
    const [formData, setFormData] = useState({
        user_id: -1,
        first_name: "",
        birthday: "",
        gender: "",
        interest: "",
        photos: [],
        about: "",
        matches: [],
    });
    
    let navigate = useNavigate();

    // Form data Change
    const handleChange = (e) => {
        const value = e.target.type === 'checkbox' ? e.target.checked : e.target.value
        const name = e.target.name;
        setFormData((prevState) => ({
            ...prevState,
            [name]: value,
        }));
    }

    // Form data Submit
    const handleSubmit = async (e) => {
        e.preventDefault()
        navigate('/search');
    }

    return (
        <div className="creation-screen">
            <h1>Create User</h1>
            <h6>Please enter your information below</h6>
            
            <div className='login-container'>
                <h2>Personal Information</h2>
                <hr/>
                <form onSubmit={handleSubmit}>
                    <label>First Name</label>
                    <input
                        type="text"
                        id="first_name"
                        name="first_name"
                        placeholder="First Name"
                        required={true}
                        value={formData.first_name}
                        onChange={handleChange}
                    />

                    <label>Birthday</label>
                    <input
                        type="date"
                        id="birthday"
                        name="birthday"
                        required={true}
                        value={formData.first_name}
                        onChange={handleChange}
                        min="1922-01-01"
                        max="2004-01-01"
                    />
                    <br/>

                    <label>Gender</label>
                    <br/>

                    <label htmlFor="male">Male</label>
                    <input
                        type="radio"
                        id="male"
                        name="gender"
                        value={formData.gender}
                    />

                    <label htmlFor="female">Female</label>
                    <input
                        type="radio"
                        id="female"
                        name="gender"
                        value={formData.gender}
                    />

                    <label htmlFor="non_identifying">Non-Identifying</label>
                    <input
                        type="radio"
                        id="non_identifying"
                        name="gender"
                        value={formData.gender}
                    />

                    <label htmlFor="no">Prefer not to say</label>
                    <input
                        type="radio"
                        id="no"
                        name="gender"
                        value={formData.gender}
                    />

                    <br/>

                    <label>Interested in</label>
                    <br/>

                    <label htmlFor="male">Male</label>
                    <input
                        type="radio"
                        id="male"
                        name="interest"
                        value={formData.interest}
                    />

                    <label htmlFor="female">Female</label>
                    <input
                        type="radio"
                        id="female"
                        name="interest"
                        value={formData.interest}
                    />

                    <label htmlFor="non_identifying">Non-Identifying</label>
                    <input
                        type="radio"
                        id="non_identifying"
                        name="interest"
                        value={formData.interest}
                    />

                    <label htmlFor="no">Everyone</label>
                    <input
                        type="radio"
                        id="no"
                        name="interest"
                        value={formData.interest}
                    />

                    <h2>About you</h2>
                    <hr/>
                    <label>Your bio</label>

                    <input className="submit-button" type="submit"/>
                </form>
            </div>
        </div>
    )
}


