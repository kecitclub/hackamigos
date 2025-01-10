const express = require('express');
const app = express.Router();

const { SerialPort } = require('serialport');
const port = new SerialPort({ path: 'COM10', baudRate: 9600 });
port.on('open', () => {console.log('Arduino Board Connected')});

app.get('/', (req, res) => {
    res.render('arduino')
})

app.post('/', (req, res) => {
        
    const c = `LED:1:${req.body.commands}`;    
    console.log(c)        
    port.write(c, (err) => {
    if (err) {
        console.error("Error writing to serial port:", err);
        return res.status(500).send("Error sending command.");
    }
    res.redirect('/arduino');
    });
});


module.exports = {app};