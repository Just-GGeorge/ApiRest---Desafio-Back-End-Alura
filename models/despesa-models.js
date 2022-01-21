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
}

module.exports = new Despesa