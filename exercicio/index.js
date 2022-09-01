const {readFile} = require('fs')
const express = require('express')

const app = express()

app.use(express.json())
app.use(express.urlencoded({extended : true}))

app.get('content', (req,res) =>{
    const files = [
        './spfc',
        './titulos.txt',
        './brasileiros.txt'

    ]

    let promises = [] 
    for(const caminhoArquivo of files){
        promises.push(lerArquivo(caminhoArquivo))
    }
})

const lerArquivo = () =>{
    console.log('')
}

app.listen(8000)