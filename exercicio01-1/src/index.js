const express = require('express')
const app = express()

app.use(express.json())

const realEstate = []

app.get('/imoveis', (req,res) =>{
    res.send(realEstate)
})


app.get('/imoveis/:id', (req,res) =>{
    const immobile = realEstate(imm => imm.id === req.params.id)
    res.send(immobile)
})

app.post('/imoveis', (req,res) =>{
    realEstate.push(req.body)
    res.send('Property created!!')
})

app.put('/imoveis/:id', (req,res)=>{
    const immIndex = realEstate.findIndex(imm => imm.id === req.params.id)
    realEstate[immIndex] = req.body
    res.send('Updated data')
})

app.delete('imoveis/:id', (req,res) =>{
    const immIndex = realEstate.findIndex(imm => imm.id === req.params.id)
    realEstate.splice(immIndex, 1)
    res.send('Delete data')
})


app.listen(8087, () =>{
    console.log('Started server up on port 8087')
})