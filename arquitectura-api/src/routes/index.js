const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const compression = require('compression');
require('express-async-errors');
const {errorMiddleware, notFoundMiddleware} = require("../middlewares");

module.exports = function({HomeRoutes}){
    const router = express.Router();
    const apiRoutes = express.Router();
    
    apiRoutes
        .use('/home', HomeRoutes)
        .use(cors())
        .use(compression())
        .use(helmet())
        .use(express.json())

    router.use("/v1/api", apiRoutes);
    router.use(notFoundMiddleware)
    router.use(errorMiddleware);    
    return router
}