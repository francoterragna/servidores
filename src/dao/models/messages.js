const mongoose = require('mongoose');

const MessageSchema = mongoose.Schema({
    username: String,
    message: String
});

module.exports = mongoose.model('Message', MessageSchema);