const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const bcrypt = require('bcrypt');
const validator = require('validator');

const userSchema = new Schema({
    _id: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
    },
    first_name: {
        type: String,
    },
    birthday: {
        type: String,
    },
    gender: {
        type: String
    },
    interest: {
        type: String
    },
    about: {
        type: String
    }
}, {_id: false});

// Static User Signup
userSchema.statics.signup = async function(email, password) {

    // Validation
    if (!email || !password) {
        throw Error('All fields must be filled')
    }
    if (!validator.isEmail(email)) {
        throw Error('Not a valid email')
    }
    if (!validator.isStrongPassword(password)) {
        throw Error('Password not strong enough');
    }

    const exists = await this.findOne({email});
    if (exists) {
        throw Error('Email already in use.');
    }
    
    // Encryption
    const myID = mongoose.Types.ObjectId().toHexString();
    //console.log("userModel: "+myID);
    const salt = await bcrypt.genSalt(3);
    const hashword = await bcrypt.hash(password, salt);

    // User Creation
    const user = await this.create({_id: myID, email, password: hashword});
    return user;
}

// Static Login 
userSchema.statics.login = async function(email, password) {
    // Validation
    if (!email || !password) {
        throw Error('All fields must be filled')
    }

    // Look for user/email
    const user = await this.findOne({email});
    if (!user) {
        throw Error('Incorrect email');
    }

    // Check if password correct
    const match = await bcrypt.compare(password, user.password);
    if (!match) {
        console.log('Yeah it is incorrect')
        throw Error('Incorrect password')
    }
    return user;
}

userSchema.statics.updateUser = async function(userID, formData) {
    //console.log("Update User: "+JSON.stringify(formData))
    // User update
    const user = await this.findOneAndUpdate(userID, formData);
    //console.log(user);
    return user;
}

module.exports = mongoose.model('User', userSchema);