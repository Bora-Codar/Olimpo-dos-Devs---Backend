const router = require('express').Router()
const controller = require('./controller/index.js')

router.get( '/', controller.renderHome )

module.exports = router
