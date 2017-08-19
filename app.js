/**
 * Created by Karan on 16-Jul-17.
 */
var express =  require('express');
var app = express();

app.use(express.static(__dirname+"/"));

var mysql      = require('mysql');
var connection = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    port     : 27000,
    password : 'root',
    database : 'doctors'

});


app.get('/contactlist',function (req,res) {
    var tosend;

    connection.query('SELECT * from doctorlist', function(err, rows) {

        res.json(rows);
        console.log('connected!');

        console.log(rows);
    });


});

app.listen(3000);
console.log("server on port 3000");