const express = require('express')
const router = express.Router()
const AuthController = require('../controllers/auth')

// Load Auth route
router.use('/', require('./auth'))

/*
 * Setup routes for index
 */
router.get('/', (req, res) => {
  res.render('index')
})

/*
 * Handle 404 error
 */
router.use('*', (req, res) => {
  res.status(404).json({
    errors: {
      msg: 'URL_NOT_FOUND'
    }
  })
})

module.exports = router
