const mongoose = require('mongoose');

const serverIp = '127.0.0.1'; 
const localDbUrl = `mongodb://${serverIp}:27017/delicious`;

mongoose.connect(localDbUrl, { useNewUrlParser: true, useUnifiedTopology: true });

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function(){
  console.log('Connected to mongodb Successfully')
});

// Modelss
require('./Category');
require('./Recipe');