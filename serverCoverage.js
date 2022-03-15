var express = require('express')
var path = require('path')
var serveStatic = require('serve-static')
var consola = require('consola')

var app = express()
app.use(serveStatic(path.join(__dirname, 'coverage')))

var port = process.env.PORT || 5000
app.listen(port)
consola.success('Server is up')
consola.info('Visit: http://localhost:' + port + ' to open')