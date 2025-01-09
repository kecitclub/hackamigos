const express = require('express')
const app = express()
let port = process.env.PORT || 3000;

app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.set('view engine', 'ejs')
app.use('/', require('./routes/_routes.js').app)

app.listen(port, () => {
    console.log(`Listening at port ${port}`)
})