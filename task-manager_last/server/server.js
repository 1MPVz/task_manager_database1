const express = require('express');
const app = express();
require('../database/db')
const cors = require('cors');
const authRoutes = require('./routes/authRoute');
const taskRoutes = require('./routes/taskRoutes');
const morgan = require('morgan');

app.use(cors());
app.use(express.json())
app.use(morgan('dev'))
app.use('/auth', authRoutes);
app.use('/task', taskRoutes);

// localhost:4000/auth/register

const port = 4000;

app.listen(port, () => {
    console.log(`server listening on port ${port}`);
});