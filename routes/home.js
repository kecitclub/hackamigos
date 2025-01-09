const express = require('express');
const app = express.Router();

app.get('/', (req, res) => {
    res.render('home', {req, message: 'Welcome to the home page!'})
})

module.exports = {app};