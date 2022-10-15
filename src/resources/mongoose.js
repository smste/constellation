const mongo = require('./events/mongo');
const userSchema = require('./structures/users-structure');
const guildsSchema = require('./structures/guilds-structure');

await mongo().then(async (mongoose) => {
    try {
      console.log('Connected to mongodb!')

      await new userSchema(user).save()
    } finally {
      mongoose.connection.close()
    };
  });