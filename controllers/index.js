const datoMemes = require('../models/memes')
function getMemes(req,res){
    datoMemes.find().exec()
    .then(resp => res.send(resp))
    .catch(err => res.status(409).send(err))
}
function postMemes(req,res){
    new datoMemes(req.body).save()
    .then(resp => res.send(resp))
    .catch(err => res.status(409).send(err))
}
function putMemes(req,res){
    const id = req.params.id
    datoMemes.findByIdAndUpdate(id,{$set:req.body},{new:true}).exec()
    .then(resp => res.send(resp))
    .catch(err => res.status(409).send(err))
}
function deleteMemes(req,res){
    const id = req.params.id
    datoMemes.findOneAndDelete(id).exec()
    .then(resp => res.send(resp))
    .catch(err => res.status(409).send(err))
}
module.exports = {getMemes, postMemes, putMemes, deleteMemes}