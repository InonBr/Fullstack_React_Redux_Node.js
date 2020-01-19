const mongoose = require('mongoose');
const config = require('config');
const db = config.get('mongoURI');

const connectDB = async () => {
  try {
    await mongoose.connect(db, {
      useCreateIndex: true,
      useUnifiedTopology: true,
      useNewUrlParser: true
    });

    console.log('MongoDB connected...');
  } catch (err) {
    console.err(err.message);
    // exit process if cannot connect!
    process.exit(1);
  }
};

module.exports = connectDB;
