//server/routes/authRoutes.js
const express = require('express');
const router = express.Router();

const taskController = require('../controllers/taskController');

router.route('/add').post(taskController.addTask);

module.exports = router;