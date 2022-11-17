require('dotenv').config({path:'./.env'});

const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser')

const {failSafeHandler, errorHandler} = require("./middleware/errorHandler");
const routes = require('./routes');

const DATABASE_URL = process.env.DATABASE_URL;

mongoose.connect(DATABASE_URL, { useNewUrlParser: true});
const database = mongoose.connection;

const app = express();
const PORT = process.env.PORT || 5000;

app.use(failSafeHandler);
app.use(bodyParser.json());
app.use('/', routes)
app.use(errorHandler);

const server=app.listen(
    PORT,()=>{
        console.log(`Server is running on port ${PORT}`)
    }
)

server.on('error', (error) => {
    console.log('Server error', error)
})

process.on('uncaughtException', (error) => {
    console.log('Uncaught exception', error)
    server.closeAllConnections()
});

process.on("unhandledRejection",(error, promise)=>{
    console.log(`Logged Error: ${error}`);
})
