const express = require('express')
const cors = require('cors')

const app = express()

app.use(cors())

app.use(express.json())


app.get('/react',async(req,res) => {
    res.send({ message: "Hello from Express"})
})


app.listen(5000,() => {
    console.log("Server started successfully at 5000")
})