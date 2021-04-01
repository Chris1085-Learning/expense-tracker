const express = require('express')
const router = express.Router()

const Record = require('../../models/record')

router.get('/', (req, res) => {
  Record.find()
    .sort({ _id: 'asc' })
    .lean()
    .then((Records) => res.render('index', { Records }))
    .catch((err) => console.log(err))
})

module.exports = router
