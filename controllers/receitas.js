
const Receita = require('../models/receita-models')

module.exports = app => { 
   

    app.post('/receitas', (req, res) => {
        const receita = req.body

        Receita.adiciona(receita)
        res.send('Enviado')
    })
}