
const Receita = require('../models/receita-models')

module.exports = app => { 
   
    app.get('/receitas', (req, res) => {
        Receita.lista(res)
    })
    
    app.get('/receitas/:id',(req,res) =>{
        const id = parseInt(req.params.id)
        Receita.buscaPorID(id,res)
    })

    app.post('/receitas', (req, res) => {
        const receita = req.body

        Receita.adiciona(receita)
        res.send('Enviado')
    })

    app.patch('/receitas/:id',(req,res) =>{
        const id = parseInt(req.params.id)
        const valores = req.body
        Receita.altera(id,valores,res)    
    } )
    app.delete('/receitas/:id',(req,res) => {
        const id = parseInt(req.params.id)
        Receita.deleta(id,res)
    })
    app.delete('/receitas/:id',(req,res) => {
        const id = parseInt(req.params.id)
        Receita.deleta(id,res)
    })


}