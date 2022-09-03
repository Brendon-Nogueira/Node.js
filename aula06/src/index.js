const express = require('express')

const app = express()

app.use(express.json())

//fake database
const myDatabase = [

]

app.get('/', (req,res) =>{
    res.send(myDatabase)

})

app.get('/:cpf',(req,res) =>{
  const student = myDatabase.find(stu => stu.cpf === req.params.cpf)
  res.send(student)
})


app.post('/', (req,res) =>{
     myDatabase.push(req.body)
     res.send('Student created sucessfully!')
})

app.put('/:cpf', (req,res) =>{
    const studentIdx = myDatabase.findIndex(stu => stu.cpf === req.params.cpf)
    myDatabase[studentIdx] = req.body
    res.send('Student updated sucessfully')
})

app.delete('/:cpf', (req,res) =>{
    const studentIdx = myDatabase.findIndex(stu => stu.cpf === req.params.cpf)
    myDatabase.splice(studentIdx, 1)
    res.send('Student deleted sucessfully')
})



app.listen(8087, () => console.log('Server up on port 8087'))
