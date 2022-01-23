const moment = require('moment')
const conexao = require('../infraestrutura/conexao')

class Receita {

    adiciona(receita) {

        const data = moment(receita.data ,'DD/MM/YYYY').format('YYYY-MM-DD HH:mm:ss')
       
        const receitadatada = { ... receita, data}
        const sql = 'INSERT INTO receitas SET ?'

        conexao.query(sql, receitadatada, (erro, resultados) => {
            if(erro) {
                console.log(erro)
            } else {
                console.log(resultados)
            }
        })
    }
    lista(res){
        const sql = 'SELECT * FROM receitas '
        conexao.query(sql , (erro,resultados) => {
            if(erro){
                res.status(400).json(erro)
            } else{
                res.status(200).json(resultados)
            }
        })
    }
    buscaPorID(id,res){
        
        const sql = 'SELECT * FROM Receitas where id=?'
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
        const sql = 'UPDATE Receitas SET ? where id=?'
        conexao.query(sql ,[valores,id], (erro , resultados) =>{
            
            if (erro){
                res.status(400).json(erro)
            }else{
                res.status(200).json({...valores, id})
            }
        })
    }
    deleta(id,res){
        const sql = 'DELETE FROM Receitas Where id=?'
        conexao.query(sql,id, (erro,resultados) => {
            if(erro){
                res.status(400).json(erro)
            }else{
                res.status(200).json({id})
            }
        })
    }
}


module.exports = new Receita
