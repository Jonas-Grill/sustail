require('dotenv').config({path:'./.env'});

const express = require('express');
const mongoose = require('mongoose');
const DATABASE_URL = process.env.DATABASE_URL;

mongoose.connect(DATABASE_URL, { useNewUrlParser: true});
const database = mongoose.connection;

const routes = require('./routes');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());
app.use('/', routes)

const server=app.listen(
    PORT,()=>{
        console.log(`Server is running on port ${PORT}`)
    }
)

process.on("unhandledRejection",(error, promise)=>{
    console.log(`Logged Error: ${error}`);
    server.close(()=>process.exit(1))
})
