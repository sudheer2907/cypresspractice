
var express = require('express');
var app = express();
var PORT = 3000;
 
// Without middleware
app.get('/', function(req, res){
    res.end();
});
 
app.listen(PORT, function(err){
    if (err) console.log(err);
    console.log("Server listening on PORT", PORT);
});

require("cypress-xpath");
require('cypress-plugin-tab');

//For download file test
const {   isFileExist } = require('cy-verify-downloads');
module.exports = (on, config) => {
  on('task', { isFileExist })
}