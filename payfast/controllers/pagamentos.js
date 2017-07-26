module.exports = (app) => {
  app.get('/pagamentos', (req, res) => {
    res.send('ok')
  })

  app.post('/pagamentos/pagamento', (req, res) => {
    const pagamento = req.body
    console.log(pagamento)
    res.send('ok')
  })
}
