const express = require('express')
const app = express()
const path = require('path')

app.use(express.static('public'))

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'home.html'))
})

const port = 3030

app.listen(port, () => console.log('Server listening on ' + port))
