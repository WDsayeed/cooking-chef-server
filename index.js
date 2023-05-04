const express = require('express')
const app = express()
const cors = require('cors')
const port = process.env.PORT || 5000;

app.use(cors())

const chef = require('./data/chef.json')

app.get('/', (req, res)=>{
        res.send('cooking is running')
})

app.get('/chef', (req, res)=>{
        res.send(chef)
})

app.get('/chef/:id', (req, res)=>{
        const id = req.params.id 
        console.log(id)
        const result = chef.find(data => data.id === parseInt(id))
        res.send(result)      
        
})


app.listen(port, ()=>{
        console.log(`cooking API is running on port: ${port}`)
})