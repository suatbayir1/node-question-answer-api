// Libraries
const express = require('express');
const dotenv = require('dotenv');
const routers = require('./routers/index');
const connectDatabase = require('./helpers/database/connectDatabase');
const customErrorHandler = require('./middlewares/errors/customErrorHandler');
const app = express();

// Express BodyParser
app.use(express.json());

// Environment Variables
dotenv.config({
    path: './config/env/config.env'
});

// Mongodb Connection
connectDatabase();

// Routers Middleware
app.use('/api', routers);

// Error Handling
app.use(customErrorHandler);

// App start
app.listen(process.env.PORT, () => {
    console.log(`App started on ${process.env.PORT} : ${process.env.NODE_ENV}`);
})
