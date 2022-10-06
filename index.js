const express = require('express')
const cors = require('cors')
const port = 5000

const router = require('./src/routes/routes')

const app = express()

// app.use = express()
app.use(cors())
app.use(express.json())
app.use(router)


app.listen(port, () => {
    console.log(`Aplicação rodando na porta ${port}.`)
})


app.get('/', (req, res) => {
    res.send("Já já continuaremos...")
})