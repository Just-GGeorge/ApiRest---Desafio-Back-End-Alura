
const Despesa = require('../models/despesa-models')

module.exports = app => { 
   

    app.post('/despesas', (req, res) => {
        const despesa = req.body

        Despesa.adiciona(despesa)
        res.send('Enviado')
    })
}