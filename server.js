const express = require('express');
const server = express();
const mongoose = require('mongoose');
require('dotenv').config();
const bodyParser = require('body-parser');
const port = 3030;
const routes = require('./routes/index');

mongoose.Promise = global.Promise;

// BodyParser
server.use(bodyParser.json());
// link between my routes folder
routes(server);

server.listen(port, () => {
    console.log(`Server started in ${port} ...`);
    //Mongo connection
    mongoose.connect(process.env.MONGO_URI, {
            useUnifiedTopology: true,
            useNewUrlParser: true,
        })
        .then(() => console.log('Database connection established ✅'))
        .catch(err => console.log(`Database connection error ❌ : ${err.message}`));
});

/* mongoose.connection
.once('open', () => console.log('Database connection established ✅'))
.on('error', (error) => console.warn('Warning : ', error)); */