const UserModel = require('../models/userModel');
const jwt = require('jsonwebtoken');
const mongoose = require('mongoose');

const createToken = (_id) => {
    return jwt.sign({_id}, process.env.SECRET, {expiresIn: '3d'})
}

// Signup User
const signupUser = async (req,res) => {
    const {email, password} = req.body;

    try {
        const user = await UserModel.signup(email, password);  
        const token = createToken(user._id);
        const id = user._id;
        res.status(200).json({email, token, id});
    } catch (error) {
        res.status(400).json({error: error.message})
    }
}

// Login User
const loginUser = async (req,res) => {
    const {email, password} = req.body;

    try {
        const user = await UserModel.login(email, password);  
        const token = createToken(user._id);
        res.status(200).json({email, token});
    } catch (error) {
        res.status(400).json({error: error.message})
    }
}

// Update User
const updateUser = async (req, res) => {
    const {id} = req.params;
    const formData = req.body;

    //console.log("ID:"+id);
    //console.log("FormData (Server): "+JSON.stringify(formData));

    const update = JSON.parse(JSON.stringify(formData));

    try {
        const updateDocument = {
            first_name: update.first_name,
            birthday: update.birthday,
            gender: update.gender,
            interest: update.preference,
            photos: [],
            about: update.about,
            matches: [],
        }

        const user = await UserModel.updateUser(id, updateDocument);
        res.status(200).json(user);
    } catch (error) {
        res.status(400).json({error: error.message});
    }
}

// Get User
const getUser = async (req, res) => {
    const user_id = req.user._id
    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({error: 'User does not exist'});
    }
    const user = await UserModel.findById(user_id);
    if (!workout) {
        return res.status(404).json({error: 'User does not exist'});
    }
    res.status(200).json(user);
}

// Get All
const getAll = async (req, res) => {
    const users = await UserModel.find();
} 

module.exports = {signupUser, loginUser, updateUser, getUser, getAll}