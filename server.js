const express = require('express');
const cors = require('cors');
//definir a porta 
const porta = 3002;
const app = express();
//habilitar o cors e utilizar json
app.use(cors());
app.use(express.json());
//testar
const connection = require('./dp_config');

app.post('/usuario/cadastrar', (request, response) => {
    let params = Array(
        request.body.nomeUsuario,
        request.body.email,
        request.body.senha
    );

    let query = "INSERT INTO usuario(nomeUsuario, email, senha) values(?,?,?);";
    connection.query(query, params, (err, results) => {
        if(results) {
            response
            .status(201)
            .json({
                sucess: true,
                message: "suceesso",
                data: results
            })

        } else { 
            response
            .status(400)
            .json({
                sucess: false,
                message: "sem suceesso",
                data: err
            })
        }
    })
});

//LOGIN
app.post('/login/usuario', (req, res) =>{
    const { email, senha } = req.body;
    connection.query('SELECT * FROM usuario  where email = ? AND senha = ?', [email, senha], (err, results) => {
        if(err){
            res.status(401).json({sucesso: false, message: 'Erro ao logar', erro: err})
        }else {
            if(results.length > 0){
                res.status(200).json({sucesso: true, message: 'Login realizado com sucesso', user: results[0]})
            }else{
                res.status(401).json({suceesso: false, message: 'Credenciais inválidas'};)
            }
        }
    });
});

//ROTAS DE ADMIN
app.get('/adm/produtos', (req, res) => {
    const sql = 'SELECT * FROM produtos';
    connection.query(sql, (err, results) => {
        if (err) {
            res.json({sucesso: false, message: 'Erro ao listar produtos', err: err });
        } else {
            res.json({sucesso: true, message: 'Produtos listados com sucesso', data:results});
        }
    });
});
 
// Rota para adicionar um novo produto
app.post('/adm/cadastrar/produto', (req, res) => {
    const { nomeProduto, precoProduto, descricao, qtdDisponivel } = req.body;
    const sql = 'INSERT INTO produtos (nomeProduto, precoProduto, descricao, qtdDisponivel) VALUES (?, ?, ?, ?)';
    connection.query(sql, [nomeProduto, precoProduto, descricao, qtdDisponivel], (err, results) => {
        if (err) {
            res.json({ sucesso: false, message: 'Erro ao adicionar produto', erro: err});
        } else {
            res.json({ sucesso: true, message: 'Produto adicionado com sucesso', data:results });
        }
    });
});

app.listen(porta, () => console.log(`rodando na porta ` + porta));


