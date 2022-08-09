const User = require('../models/userModel');

// Signup User
const signupUser = async(req,res) => {
    const {email, password} = req.body;

    try {
        const user = await User.signup(email, password);
        res.status(200).json({email});
    } catch (error) {
        res.status(400).json({error: error.message});
    }
}

// Login User
const loginUser = async(req,res) => {
    const {email, password} = req.body;

    try {
        const user = await User.login(email, password);
        res.status(200).json({email});
    } catch (error) {
        res.status(400).json({error: error.message});
    }
}

module.exports={signupUser, loginUser};