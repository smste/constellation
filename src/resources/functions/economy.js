const mongo = require('../events/mongo');
const profilesSchema = require('../structures/profile-structure');

module.exports = (client) => {}

module.exports.getWallet = async (guildId, userId) => {
    return await mongo().then(async mongoose => {
        try {
            const result = await profilesSchema.findOne({
                guildId,
                userId
            })

            console.log(result)

            let wallet = 0
            let bank = 0
            if (result) {
                wallet = result.wallet
            } else {
                console.log("inserting a doc");
                await new profilesSchema({
                    guildId,
                    userId,
                    wallet,
                    bank,
                }).save()
            }

            return wallet;
        } finally {
            mongoose.connection.close();
        }
    })
}

module.exports.getBank = async (guildId, userId) => {
    return await mongo().then(async mongoose => {
        try {
            const result = await profilesSchema.findOne({
                guildId,
                userId
            })

            console.log(result)

            let wallet = 0
            let bank = 0
            if (result) {
                bank = result.bank
            } else {
                console.log("inserting a doc");
                await new profilesSchema({
                    guildId,
                    userId,
                    wallet,
                    bank,
                }).save()
            }

            return bank;
        } finally {
            mongoose.connection.close();
        }
    })
}