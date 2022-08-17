const express = require('express')
const routes = require('./routes')
const cors = require('cors')
const app = express()
const port = 3000

app.use(cors())
app.use(express.urlencoded({extended: false}))
app.use(express.json())
app.use(routes)


app.listen(port, () => {
  console.log(`app is running on http://localhost${port}`)
})