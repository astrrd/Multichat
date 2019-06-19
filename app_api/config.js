var config = {};

config.db = {}; //MongoDB database

const MongoClient = require('mongodb').MongoClient;
const uri = "mongodb+srv://admin:admin@multichat-2bu4e.mongodb.net/test?retryWrites=true&w=majority";


config.db.test = 'mongodb://localhost/multichat_test';
config.db.remote = process.env.MONGO_URI;

module.exports = config;
