const express = require('express')
const load = require('express-load')

module.exports = () => {
  const app = express()
  load().into(app)

  return app
}
