var express = require('express')
var router = express.Router()
var {getMemes, postMemes, putMemes, deleteMemes} = require('../controllers/index')

router.get('/', getMemes)
router.post('/', postMemes)
router.put('/:id', putMemes)
router.delete('/:id', deleteMemes)

module.exports = router