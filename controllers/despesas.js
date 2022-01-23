
const Despesa = require('../models/despesa-models')

module.exports = app => { 
   
    app.get('/despesas', (req, res) => {
        Despesa.lista(res)
    })
    app.get('/despesas/:id',(req,res) =>{
        const id = parseInt(req.params.id)
        Despesa.buscaPorID(id,res)
    })

    app.post('/despesas', (req, res) => {
        const despesa = req.body

        Despesa.adiciona(despesa)
        res.send('Enviado')
    })
    app.patch('/despesas/:id',(req,res) =>{
        const id = parseInt(req.params.id)
        const valores = req.body
        Despesa.altera(id,valores,res)    
    } )

    app.delete('/despesas/:id',(req,res) => {
        const id = parseInt(req.params.id)
        Despesa.deleta(id,res)
    })


}