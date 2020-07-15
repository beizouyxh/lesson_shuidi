var express = require('express');
var app = express();

// respond with "hello world" when a GET request is made to the homepage
app.get('/api', function (req, res) {
    //   res.send('const a=123');
    let json = {
        name: 'beizou',
        age: 23
    }
    res.send(`callback(${JSON.stringify(json)})`)
});
app.get('/abc.js',(req,res)=>{
    const fs=require('fs');
    const content=fs.readFileSync('./abc.js','utf8')
    res.setHeader('Cache-Control','max-age=10')
    res.setHeader('etag','abcdefg');
})
app.listen(8090, () => {
    console.log('8090')
})