const express = require("express");
const bodyParser = require("body-parser");

const { PORT } = require('./config/serverConfig');

const apiroutes=require('./routes/index')
const setupAndStartServer = async () => {

    // create the express object
    const app = express();

   
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({extended: true}));
    app.use('/api',apiroutes);
    app.listen(PORT, async () => {
        console.log(`Server started at ${PORT}`);
    });
}

setupAndStartServer();
