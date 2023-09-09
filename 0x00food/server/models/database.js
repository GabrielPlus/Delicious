const mongoose = require('mongoose');

const serverIp = '127.0.0.1'; // Replace with your server's IP address
const localDbUrl = `mongodb://${serverIp}:27017/Recip`;

mongoose.connect(localDbUrl, { useNewUrlParser: true, useUnifiedTopology: true });

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function(){
  console.log('Connected')
});

// Models
require('./Category');
require('./Recipe');