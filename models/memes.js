const mongoose = require('mongoose')
const Schema = mongoose.Schema

const memesDetails = new Schema({
    name: String,
    url: String,
    categoria: String,
    calificacion: Number
})
const memeDetail = mongoose.model('memes', memesDetails)
module.exports = memeDetail