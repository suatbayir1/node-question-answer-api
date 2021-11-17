// Libraries
const express = require('express');
const dotenv = require('dotenv');
const routers = require('./routers/index');
const app = express();


// Environment Variables
dotenv.config({
    path: './config/env/config.env'
});

// Routers Middleware
app.use('/api', routers);

// App start
app.listen(process.env.PORT, () => {
    console.log(`App started on ${process.env.PORT} : ${process.env.NODE_ENV}`);
})
