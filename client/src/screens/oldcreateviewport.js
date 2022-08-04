<form className="creation-container" onSubmit={handleSubmit}>
                <section style={{backgroundColor: 'red'}}>
                    <label htmlFor="first_name">First Name:</label>
                    <input 
                        id="first_name"
                        type="text" 
                        name="first_name" 
                        placeholder="Enter Your First Name"
                        required={true}
                        value={formData.first_name}
                        onChange={handleChange}
                    />

                    <label>Birthday:</label>
                    <input 
                        id="birthday"
                        type="date"
                        name="birthday"
                        required={true}
                        value={formData.birthday}
                        onChange={handleChange}
                        min="1922-01-01"
                        max="2004-01-01"
                    />

                    <label>Gender:</label>
                    <div className="radio-buttons">
                        <label>Male</label>
                        <input 
                            type="radio"
                            id="male"
                            name="gender"
                        />

                        <label>Female</label>
                        <input 
                            type="radio"
                            id="female"
                            name="gender"
                        />

                        <label>Other</label>
                        <input 
                            type="radio"
                            id="other"
                            name="gender"
                        />

                        <label>Prefer not to say</label>
                        <input 
                            type="radio"
                            id="prefer-not-to-say"
                            name="gender"
                        />
                    </div>
                 

                    <label>Show me:</label>


                   
                </section>

                <section>
                    
                <label>About me:</label>
                <textarea  
                    rows={4}
                    cols={4}
                    maxLength={150}
                    required={true}
                    name="about"
                />

                <label>My interests:</label>
                </section>

                <input className="submit-button" type="submit"/>
            </form>



.creation-screen form {
    display: flex;
    flex-direction: column;
  }
  
  .creation-screen  .radio-buttons {
    background-color: white;
    display: flex;
    flex-direction: row;
    padding: 15px 30px;
    margin: 10px 0;
    font-size: 15px;
    border: solid 2px rgb(219, 219, 219);
    border-radius: 10px;
  }
  
  .creation-screen form .radio-buttons label {
    color: red;
  }
  
  .creation-screen input {
    padding: 8px;
    margin: 8px;
    font-size: 14px;
    border-radius: 10px;
    display: flex;
    justify-content: row;
  }
  
  .creation-screen input[type=submit] {
    text-align: center;
  }
  
  .creation-screen form label {
    font-weight: bold;
    margin: 10px 0;
  }
  
  /* .creation-screen form section {
    display: flex;
    flex-direction: column;
    padding: 20px;
    width: 35%;
    text-align: start;
  } */
  