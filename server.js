const express = require('express')
routes = require('./routes/routes')
const app = express()
const port = 3001

app.use(routes)

app.listen(port, () => {
    console.log(`Running on port ${port}`)
})