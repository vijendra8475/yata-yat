const dotenv = require('dotenv');
dotenv.config();
const express = require('express');
const app = express();
const cors = require('cors');
const connectToDB = require('./db/db')
const userRoutes = require('./routes/user.routes');
const cookieParser = require('cookie-parser');

connectToDB();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended : true }));
app.use(cookieParser());

// app.listen(5000);

app.get('/',(req, res) => {
    res.send('hello world');
})

app.use('/users',userRoutes);

module.exports = app;