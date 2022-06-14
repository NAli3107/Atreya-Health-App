const mongoose = require('mongoose');
const mongoURL = process.env.MONGODB_URL || 'mongodb://localhost/atreyaHealth'
console.log(mongoURL)
mongoose.connect(mongoURL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

module.exports = mongoose.connection;