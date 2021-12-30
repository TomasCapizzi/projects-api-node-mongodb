require('dotenv').config();

console.log(process.env.MONGODB_URI, 'Puerto');

module.exports = {
    db_uri: process.env.MONGODB_URI,
    port: process.env.PORT,
}