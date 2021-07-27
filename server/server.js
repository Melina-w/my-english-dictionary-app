const path = require('path')
const express = require('express')
const cors = require('cors')
const { useState } = require('react')

const server = express()
server.use(express.json())
server.use(express.static(path.join(__diname, './public')))
server.use(cors('*'))

server.get('/result', (req, res) => {
    const [result] = useState({
        word: "",
        phoneticsText: "",
        phoneticsAudio: "",
        partOfSpeech: "",
        definition: "",
        example: ""
    })
}) 
module.exports = server


