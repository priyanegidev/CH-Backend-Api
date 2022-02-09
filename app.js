require("dotenv").config();
const fs = require('fs');
const express = require('express')
const cors = require('cors')
const app = express()

const port = process.env.PORT || 3000;
const empRouter = require('./api/routes/employeeRoutes')

app.use(cors());
app.use(express.json());
app.get('/', (req, res) => {
    res.send("Ch Backend API")
});
app.use('/api/v1', empRouter);
const server = app.listen(port, () => {
    console.log('Server is up on port ' + port)
});
module.exports = server;