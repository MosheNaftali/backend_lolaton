const express =  require('express')
const {config} = require('./config/index')
const {db} = require('./db')
const memesRoute = require('./routes/memes')
const cors = require('cors')
const app = express()
const datoMemes = require('./models/memes')
app.use(express.json())
app.use(cors())
app.use('/memes', memesRoute)

const PORT = config.port
app.listen(PORT || 8000,()=>{
    console.log(`Servidor iniciado en puerto ${PORT}`)
})