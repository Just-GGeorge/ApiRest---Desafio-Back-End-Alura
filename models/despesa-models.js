const moment = require('moment')
const conexao = require('../infraestrutura/conexao')

class Despesa {
    adiciona(despesa) {

        const data = moment(despesa.data ,'DD/MM/YYYY').format('YYYY-MM-DD HH:mm:ss')
       
        const despesadatada = { ... despesa, data}
        const sql = 'INSERT INTO despesas SET ?'

        conexao.query(sql, despesadatada, (erro, resultados) => {
            if(erro) {
                console.log(erro)
            } else {
                console.log(resultados)
            }
        })
    }
    lista(res){
        const sql = 'SELECT * FROM despesas '
        conexao.query(sql , (erro,resultados) => {
            if(erro){
                res.status(400).json(erro)
            } else{
                res.status(200).json(resultados)
            }
        })
    }
    buscaPorID(id,res){
        
        const sql = 'SELECT * FROM Despesas where id=?'
        conexao.query(sql,id,(erro,resultados) => {
            const oatendimento = resultados[0]
            if(erro){
                res.status(400).json(erro)
            }else{
                res.status(200).json(oatendimento)
            }
        })
    }

    altera(id,valores,res){
        if (valores.data){
            valores.data = moment(valores.data,'DD/MM/YYYY').format('YYYY-MM-DD HH:mm:ss')
        }
        const sql = 'UPDATE Despesas SET ? where id=?'
        conexao.query(sql ,[valores,id], (erro , resultados) =>{
            
            if (erro){
                res.status(400).json(erro)
            }else{
                res.status(200).json({...valores, id})
            }
        })
    }
    deleta(id,res){
        const sql = 'DELETE FROM Despesas Where id=?'
        conexao.query(sql,id, (erro,resultados) => {
            if(erro){
                res.status(400).json(erro)
            }else{
                res.status(200).json({id})
            }
        })
    }
}

module.exports = new Despesa