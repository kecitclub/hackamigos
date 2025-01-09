const express = require('express');
const app = express.Router();
const functions = require('../functions')
const io = require('../server').io;

let list = [
    ['Copper sulfate', 'blue'],
    ['Potassium permanganate', 'purple'],
    ['Ferric chloride', 'yellow'],
    ['Chromium trioxide', 'orange'],
    ['Nickel sulfate', 'green'],
    ['Potassium dichromate', 'orange'],
    ['Cobalt chloride', 'pink'],
    ['Lead iodide', 'yellow'],
    ['Iron(II) sulfate', 'green'],
    ['Iron(III) nitrate', 'yellow'],
    ['Sodium chromate', 'yellow'],
    ['Sodium dichromate', 'orange'],
    ['Silver nitrate', 'white'],
    ['Copper chloride', 'green'],
    ['Potassium ferricyanide', 'red'],
    ['Potassium ferrocyanide', 'yellow'],
    ['Manganese dioxide', 'black'],
    ['Methyl orange', 'orange'],
    ['Phenolphthalein', 'white'],
    ['Ammonium dichromate', 'orange'],
    ['Sodium thiosulfate', 'white'],
    ['Bromine', 'red'],
    ['Chlorine', 'green'],
    ['Iodine', 'purple'],
    ['Sulfur', 'yellow'],
    ['Zinc oxide', 'white'],
    ['Lead oxide', 'yellow'],
    ['Antimony trioxide', 'white'],
    ['Cobalt nitrate', 'red'],
    ['Prussian blue', 'blue'],
    ['Cadmium sulfide', 'yellow'],
    ['Copper(I) oxide', 'red'],
    ['Mercuric sulfide', 'red'],
    ['Uranium oxide', 'green'],
    ['Vanadium pentoxide', 'orange'],
    ['Zinc sulfide', 'white'],
    ['Calcium carbonate', 'white'],
    ['Manganese(II) sulfate', 'pink'],
    ['Bismuth nitrate', 'white'],
    ['Titanium dioxide', 'white'],
    ['Thymol blue', 'blue'],
    ['Bromothymol blue', 'blue'],
    ['Indigo carmine', 'blue'],
    ['Crystal violet', 'purple'],
    ['Eosin Y', 'pink'],
    ['Fluorescein', 'green'],
    ['Malachite green', 'green'],
    ['Rhodamine B', 'pink'],
    ['Methylene blue', 'blue']
]


app.get('/', (req, res) => {
    res.render('home', {req, list})
})

app.get('/tube', (req, res) => {
    res.render('tube')
})

app.get('/output', (req, res) => {
    res.render('output')
})

io.on('connection', (socket) => {

    socket.on('mix', async (data) => {
        
        let chemical1 = data[0];
        let chemical2 = data[1];
        io.emit('result', 'Loading...');
        let result = await functions.mix(chemical1, chemical2);
        io.emit('result', result);
    })
})

module.exports = {app};