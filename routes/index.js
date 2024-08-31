const express = require('express')

const router = express.Router();

const userRoutes = require('./user')
const authRoutes = require('./auth')
const pingRoutes = require('./ping')

userRoutes(router);
authRoutes(router);
pingRoutes(router);

module.exports = router