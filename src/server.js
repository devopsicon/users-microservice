import express from 'express';
import Router from './Router'

const app = express();

const port = process.env.PORT || 3000;


// init app
const router = new Router(app);

// listen on port
app.listen(port, () => {
    console.info(`server started on port ${port}`);
});
var t = '';
module.exports = app;