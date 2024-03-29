const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const messageSchema = new mongoose.Schema({
    sender: {
        type: String
    },
    receiver: {
        type: String,
    },
    text: {
        type: String
    },
}, {timestamps: true});

module.exports = mongoose.model("Message", messageSchema);