const fs = require('fs')

const fileName = 'resources/world_cup.txt'

const contentFile = fs.readFileSync(fileName, 'utf-8')

console.log(`Content File: ${contentFile}`)

