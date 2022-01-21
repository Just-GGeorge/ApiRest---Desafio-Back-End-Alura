class Tabelas {
    init(conexao){
        this.conexao = conexao
        this.criarReceita()
        this.criarDespesas()
    }
    criarReceita (){
        const sql = 'CREATE TABLE IF NOT EXISTS Receitas(id int NOT NULL AUTO_INCREMENT, descricao text , valor float , data datetime NOT NULL, PRIMARY KEY(id))'

        this.conexao.query(sql, (erro) =>{
            if (erro){
                console.log(erro)
            } else {
                console.log('Tabela Receitas Criada com sucesso')
            }
        })
    }
    criarDespesas (){
        const sql = 'CREATE TABLE IF NOT EXISTS Despesas(id int NOT NULL AUTO_INCREMENT, descricao text , valor float , data datetime NOT NULL, PRIMARY KEY(id))'

        this.conexao.query(sql, (erro) =>{
            if (erro){
                console.log(erro)
            } else {
                console.log('Tabela Despesas Criada com sucesso')
            }
        })
    }
}

module.exports = new Tabelas