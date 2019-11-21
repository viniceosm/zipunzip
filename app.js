var zipdir = require('zip-dir');
var unzip = require('unzip');
var fs = require('fs');

function zip(){
    // Use an `each` option to call a function everytime a file is added, and receives the path 
    zipdir('./minhapasta', { saveTo: './myzip.zip' }, function(err, buffer) {
    });
}

function uzip(){
    // Unzip
    fs.createReadStream('./myzip.zip').pipe(unzip.Extract({ path: './minhappasta' }));
}