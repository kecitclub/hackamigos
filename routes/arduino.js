// const express = require('express');
// const app = express.Router();

// const { SerialPort } = require('serialport');
// const port = new SerialPort({ path: 'COM6', baudRate: 9600 });
// port.on('open', () => {console.log('Arduino Board Connected')});

// app.post('/', (req, res) => {
//   const pin = req.body.pin; 
//   const status = req.body.status ? "ON" : "OFF";

//   const command = `PIN:${pin}:${status}\n`;
//   port.write(command, (err) => {
//     if (err) {
//       console.error("Error writing to serial port:", err);
//       return res.status(500).send("Error sending command.");
//     }
//     res.status(200).send("Command sent.");
//   });
// });

// module.exports = {app};