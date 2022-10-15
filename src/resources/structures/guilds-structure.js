const mongoose = require('mongoose');

const guildData = mongoose.Schema({
    guildid: {
      type: String,
      required: true,
    },
  })

module.exports = mongoose.model('guilds', guildData)