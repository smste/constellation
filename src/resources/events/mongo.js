const mongoose = require('mongoose')
const data = require('../../../config.json')
const mongoPath = `mongodb+srv://samster:${data.bot.mongopw}@constellation.rwvciqd.mongodb.net/constellation-db?retryWrites=true&w=majority`

module.exports = async () => {
  await mongoose.connect(mongoPath, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })

  return mongoose
}