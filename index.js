const express = require('express')
const path = require('path')

const Rollbar = require('rollbar')
const rollbar = new Rollbar({
  accessToken: '1f25d88fbfc74df88243ed100f4c2e71',
  captureUncaught: true,
  captureUnhandledRejections: true,
})

const app = express()



app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '/public/index.html'))
})


const port = process.env.PORT || 4646

app.listen(port, () => console.log(`Take us to warp ${port}!`))