const express = require('express');
const db = require('./db/db.js');
const router = require('./router/index.js');
const app = express();
router(app);
app.listen('3000', () => {
    console.log('启用了');
})