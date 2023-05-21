const mongoose = require('mongoose');

const MessageSchema = mongoose.Schema({
    user: String,
    message: String
});

module.exports = mongoose.model('Message', MessageSchema);