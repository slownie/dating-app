import { useState } from "react"
import { useUpdate } from "../hooks/useUpdate";

export default function CreationViewport()
{
    const [formData, setFormData] = useState({
        //user_id: localStorage.getItem('id'),
        first_name: "",
        birthday: "",
        gender: "",
        interest: "",
        photos: [],
        about: "",
        matches: [],
    });

    const {update, error, isLoading} = useUpdate();

    // Form data Change
    const handleChange = (e) => {
        const value = e.target.type === 'checkbox' ? e.target.checked : e.target.value;
        const name = e.target.name;
        setFormData((prevState) => ({
            ...prevState,
            [name]: value,
        }));
    }

    // Form data Submit
    const handleSubmit = async (e) => {
        e.preventDefault();
        //console.log("FormData (viewport): "+JSON.stringify(formData))
        const userID = localStorage.getItem('id');
        await update(formData, userID);

       
        // try {
        //     const response = fetch('/api/users/update/'+userID, {
        //         method: 'PUT',
        //         headers: {'Content-Type': 'application/json'},
        //         body: JSON.stringify(formData)
        //     })
        //     const success = response.status === 200
        //     if (success) console.log('Success')
        // } catch (error) {
        //     console.log(error);
            
        // }
    }

    return (
        <div className="creation-screen">
            <h1>Create User</h1>
            <h6>Please enter your information below</h6>
            
            <div className='login-container'>
                <h2>Personal Information</h2>
                <hr/>
                <form onSubmit={handleSubmit}>

                    <label htmlFor="first_name">First Name</label>
                    <input
                        type="text"
                        placeholder="First Name"
                        id="first_name"
                        name="first_name"
                        min="2"
                        max="12"
                        required={true}
                        value={formData.first_name}
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

                    <label htmlFor="preference">Interested in</label>
                    <div className="radio">
                        <label htmlFor="male">Male</label>
                        <input
                            type="radio"
                            id="male"
                            name="preference"
                            value="male"
                            onChange={handleChange}
                        />
                        <label htmlFor="female">Female</label>
                        <input
                            type="radio"
                            id="female"
                            name="preference"
                            value="female"
                            onChange={handleChange}
                        />
                        <label htmlFor="nonb">Non-Binary</label>
                        <input
                            type="radio"
                            id="nonb"
                            name="preference"
                            value="nonb"
                            onChange={handleChange}
                        />
                        <label htmlFor="everyone">Everyone</label>
                        <input
                            type="radio"
                            id="everyone"
                            name="preference"
                            value="everyone"
                            onChange={handleChange}
                        />
                    </div>
                    <br/>

                    <h4>About you</h4>
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


