const mongoose = require('mongoose');

const reqString = {
    type: String,
    required: true
}

const profileSchema = mongoose.Schema({
    guildId: reqString,
    userId: reqString,
    wallet: {
        type: Number,
        required: true
    },
    bank: {
        type: Number,
        required: true
    }
})

module.exports = mongoose.model('profiles', profileSchema);