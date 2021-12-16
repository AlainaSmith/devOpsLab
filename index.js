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

app.post('/api/student', () => (req, res) => {
    let {name} = req.body
    name = name.trim()

    students.push(name)

    rollbar.log('Student added succesfully', {author:'Alaina', type: 'manual'})    //create students array up top
    res.status(200).send(students)
})


const port = process.env.PORT || 4646

app.listen(port, () => console.log(`Take us to warp ${port}!`))