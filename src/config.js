require('dotenv').config();

module.exports = {
    db_uri: process.env.MONGODB_URI,
    port: process.env.PORT,
}