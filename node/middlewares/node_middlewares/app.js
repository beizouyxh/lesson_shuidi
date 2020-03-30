const Koa = require('koa');
const app = new Koa();
const routering = require('./routes/login');
routering(app);
app.listen(3000, () => console.log('online'))