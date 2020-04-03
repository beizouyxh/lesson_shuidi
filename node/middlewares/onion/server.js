const app = require('./app');

app.use(() => {
    console.log(1) // 执行
        // next();
        // console.log(2)
})

app.use(() => {
    console.log(3) // 执行
        // next();
        // console.log(2)
})

app.use(() => {
    console.log(5) // 执行
        // next();
        // console.log(2)
})
app.compose();