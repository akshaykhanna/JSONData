'use strict';

let jsonData = require('./news3.json');

console.log(jsonData);

const fs = require('fs');

let data = JSON.stringify(jsonData, null, 2);

fs.writeFile('news4.json', data, (err) => {
    if (err) throw err;
    console.log('Data written to file');
});

console.log('This is after the write call');