const express = require('express')
const app = express()
const routes = require('./src/server/routes')

const port = 3000

app.use('/', routes);

app.use( (req, res, next) => {
  let err = new Error('Not Found');
  err.status = 404;  
});

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`)
})

module.exports = app;
