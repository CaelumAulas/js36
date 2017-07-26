const express = require('express')
const load = require('express-load')
const bodyParser = require('body-parser')

module.exports = () => {
  const app = express()

  app.use(bodyParser.urlencoded({extended: true}))
  app.use(bodyParser.json())

  load('controllers').into(app)

  return app
}
