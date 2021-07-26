const path= require ('path')
const express= require('express')
const cors= require('cors')

cosnt server= express()

server.use(express.json())
server.use(express.static(path.join(__diname, './public')))
server.use(cors('*'))

server.get('/meaning', (req,res) => {
    const meaning =[{partOfSpeech}]
})


