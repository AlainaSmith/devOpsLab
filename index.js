const express = require('express')
const path = require('path')

const Rollbar = require('rollbar')

const rollbar = new Rollbar({
  accessToken: '1f25d88fbfc74df88243ed100f4c2e71',
  captureUncaught: true,
  captureUnhandledRejections: true,
})

const app = express()

// app.get('/', (req, res) => {
//     newFunction()
// }).catch(err => console.log(err))
 

// app.get('/', (req, res) => {
// try {
//     nonExistentFunction();
//   } catch (error) {
//     console.error(error);




app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '/public/index.html'))
    rollbar.info('html file served successfully.')
})

app.get('/css', (req, res) => {
    res.sendFile(path.join(__dirname, '/public/index.css'))
})

app.get('/error', (req,res) => {
    badFunction()
})

app.post('/api/student', () => (req, res) => {
    let {name} = req.body
    name = name.trim()

    students.push(name)

    rollbar.log('Student added succesfully', {author:'Alaina', type: 'manual'})    //create students array up top
    res.status(200).send(students)

      const index = students.findIndex(studentName=> studentName === name)
    
        if(index === -1 && name !== ''){
            students.push(name)
            rollbar.log('Student added successfully', {author: 'Scott', type: 'manual entry'})
            res.status(200).send(students)
        } else if (name === ''){
            rollbar.error('No name given')
            res.status(400).send('must provide a name.')
        } else {
            rollbar.error('student already exists')
            res.status(400).send('that student already exists')
        }
    
    })

app.use(rollbar.errorHandler())
// rollbar.


const port = process.env.PORT || 3535


app.listen(port, () => console.log(`Take us to warp ${port}!`))


