const app = require('./config/custom-express')()
const port = 3000

app.listen(port, () => {
  console.log(`Servidor de pé em: http://localhost:${port}`)
})
