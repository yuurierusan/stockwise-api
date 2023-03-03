const bcrypt = require('bcrypt')
const jwt = require('jwt')
require('dotenv').config()

const SALT_ROUNDS = parseInt(process.env.SALT_ROUNDS)
const APP_SECRET_KEY = process.env.APP_SECRET_KEY
