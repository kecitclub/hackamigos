const express = require('express');
const app = express.Router();
const functions = require('../functions')
const io = require('../server').io;

app.get('/', (req, res) => {
    res.render('home', {req, list: functions.list})
})

io.on('connection', (socket) => {

    socket.on('mix', async (data) => {

        io.emit('result', ['loading....', '#c7e0fd', 'loading...']);

        let reaction = await functions.mix.getChemicalReaction(data[0], data[1]);
        let color = await functions.mix.getColor(data[0], data[1]);
        let product = await functions.mix.getProduct(data[0], data[1]);

        io.emit('result', [reaction, color, product]);
    })

    socket.on('change_color1', data => {
        socket.emit('act_change_color1', functions.getColor(data))
    })

    socket.on('change_color2', data => {
        socket.emit('act_change_color2', functions.getColor(data))
    })
})

module.exports = {app};