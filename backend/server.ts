require('dotenv').config({path:'./config.env'});

const express = require('express');


const app = express();
const PORT = process.env.PORT || 5000;
const errorHandler = require('./middleware/error')

app.use(express.json());

//ErrorHandler (Should be last piece of middleware)
app.use(errorHandler);

const server=app.listen(
    PORT,()=>{
        console.log(`Server is running on port ${PORT}`)
    }
)
process.on("unhandledRejection",(error,promise)=>{
    console.log(`Logged Error: ${error}`);
    server.close(()=>process.exit(1))

})