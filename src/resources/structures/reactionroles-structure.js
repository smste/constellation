const mongoose = require('mongoose');

const ReactionRolesSchema = mongoose.Schema({
    guildId: String,
    Message: String,
    Roles: Object
})

module.exports = mongoose.model('reaction-roles', ReactionRolesSchema)