const customExpress = require('./config/custom-express')
const conexao = require('./infraestrutura/conexao')
const Tabelas = require('./infraestrutura/tabelas')
conexao.connect((erro) => {
    if (erro){
        console.log(erro)
    }else {
        console.log('Conectado com sucesso')
        Tabelas.init(conexao)
        const app = customExpress()
        app.listen(3001,() => console.log('Servidor rodando na porta 3001'))
    }
} )
