const express = require('express');
const mongoose = require('mongoose');
mongoose.connect('mongodb://mongodb/test') //mongodb://协议+test数据库
const kittySchema = mongoose.Schema({
    name: String
});

kittySchema.methods.speak = function() {
    var greeting = this.name ?
        'Meow name is' + this.name :
        'I dont have a name';
    console.log(greeting)
}
var Kitten = mongoose.model('Kitten', kittySchema);
const app = express();
app.get('/create', (req, res) => {
    var fluffy = new Kitten({
        name: 'fluffy'
    });
    fluffy.save(function(err, fluffy) {
        if (err)
            return console.error(err);
        fluffy.speak();
    })
})
app.get('/', (req, res) => {
    Kitten.find(function(err, Kittens) {
        if (err)
            return console.error(err)
        res.send(Kittens);
    });
})
app.listen(3001, console.log('Example app listen port is 3001'));