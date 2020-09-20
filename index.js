const express = require('express')
const app = express()
const routes = require('./src/server/routes')

const PORT = process.env.PORT || '3000'

app.use('/', routes);

app.use( (req, res, next) => {
  let err = new Error('Not Found');
  err.status = 404;  
});

app.listen(PORT, () => {
  console.log(`App listening at http://localhost:${PORT}`)
})

module.exports = app;
