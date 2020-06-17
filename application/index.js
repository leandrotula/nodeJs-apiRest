const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const mongoose = require('mongoose')

app.set('port', process.env.PORT || 3000)

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use('/v1/users', require('./routes/userRoutes'))


mongoose.connect("mongodb://localhost/users", (err, res) => {
    if (err) {
        console.log(err)
    }

})

app.listen(app.get('port'), () => console.log(`Listening on port ${app.get('port')}`))
