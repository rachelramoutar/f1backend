const mongoose = require("mongoose");
const {DATABASE_URL} = process.env


async function connectToMongo() {
  try {
    await mongoose.connect(DATABASE_URL);
    console.log('The connection with mongodb is established');
  } catch (err) {
    console.error('Connection error:', err.message);
  }
}

connectToMongo();

module.exports = {
  Team: require('./Team'),
  Player: require('./Player'),
  Stats: require('./Stats'),
}

