<h1>Portal do Oráculo</h1>

##Informações do trabalho
*Banco de dados
*Rota de Login
*Rota de Cadastro de usuario
*Rota de Cadastro de produtos

##Criando o banco de dados

Criando a databse
````
create database PortalDoOraculo;
````
Selecionar a database
````
use PortalDoOraculo;
````

Criar a tabela de usuarios
````
create table usuario(
    id_usuario int not null primary key auto_increment,
    nomeUsuario varchar(500) not null,
    email varchar(500) not null unique,
    senha varchar(20) not null unique
);
````
Criar a tabela de produtos
````
create table produtos(
    id_produtos int not null primary key auto_increment,
    nomeProduto varchar(500) not null,
    precoProdutos float not null,
    descricao varchar(1000) not null,
    qtdDisponivel float
);

````
Criar tabela de carrinho fazendo um link com usuario e produtos
````
create table carrinho(
    id_produtos int not null,
    id_usuario int not null,
    totalProdutos int not null,
    precoCarrinho float not null, 
    precoProdutos float not null,
    nomeProduto varchar(500) not null,
    primary key (id_produtos, id_usuario),
    foreign key (id_usuario) references usuario(id_usuario),
    foreign key (id_produtos) references produtos(id_produtos)
);
````
Para testar 
````
select * from produtos;
````
##Criando a API
Abrir o gitbash e usar a pasta no terminal
````
cd lojaTecnico
````
Criar o arquivo package.json para gerenciaros pacotes node 
````
npm init -y
````
Instalar os 4 pacotes necessários para o uso das api`s
````
npm i express nodemon mysql2 cors
````
O que cada pacote faz:
*express: framework web para construção da infraestrutura da API;
*nodemon: Monitora as mudanças nos arquivos do projeto e reinicia automaticamente o servidor do Node;
*mysql2: Conectar e mandar comandos SQL para o banco;
*cors: Mecanismo para adicionar cabeçalhos HTTP que informam aos navegadores para permitir que uma aplicação web seja executada em origem e acesse recursos de outra origem diferente

##Abrir o arquivo no VSCODE
````
code . 
````
Agora criar um folder dentro do html com o nome dp_config.js

Dentro do dp_config.js:
*linkar o mysql com o VSCODE
````
const mysql = require('mysql2')

const connection = mysql.createConnection({
host: 'localhost',
user: 'root',
password: 'root',
database: 'PortalDoOraculo'

});

connection.connect((err) => {
    if(err){
        throw err;
    } else{
        console.log('Mysql conectado');
    }
})

module.exports = connection;
````

