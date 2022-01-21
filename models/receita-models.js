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
}


module.exports = new Receita
