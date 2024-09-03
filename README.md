<h1>Portal do Oráculo</h1>

<h2>Informações do trabalho</h2>
<li>Banco de dados</li>
<li>Rota de Login</li>
<li>Rota de Cadastro de usuario</li>
<li>Rota de Cadastro de produtos</li>



<h2>Criando o banco de dados</h2>

<h3>Criando a databse</h3>

````
create database PortalDoOraculo;
````
<h3>Selecionar a database</h3>

````
use PortalDoOraculo;
````

<h3>Criar a tabela de usuarios</h3>

````
create table usuario(
    id_usuario int not null primary key auto_increment,
    nomeUsuario varchar(500) not null,
    email varchar(500) not null unique,
    senha varchar(20) not null unique
);
````
<h3>Criar a tabela de produtos</h3>

````
create table produtos(
    id_produtos int not null primary key auto_increment,
    nomeProduto varchar(500) not null,
    precoProdutos float not null,
    descricao varchar(1000) not null,
    qtdDisponivel float
);

````
<h3>Criar tabela de carrinho fazendo um link com usuario e produtos</h3>

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
<h3>Para ver se tem algo dentro das tabelas</h3>

````
select * from produtos;
````
<h2>Criando a API</h2>

<h3>Abrir o gitbash e usar a pasta no terminal</h3>

````
cd lojaTecnico
````
<h3>Criar o arquivo package.json para gerenciaros pacotes node</h3>

````
npm init -y
````
<h3>Instalar os 4 pacotes necessários para o uso das api`s</h3>

````
npm i express nodemon mysql2 cors
````

O que cada pacote faz:
<li>express: framework web para construção da infraestrutura da API;</li>
<li>nodemon: Monitora as mudanças nos arquivos do projeto e reinicia automaticamente o servidor do Node;</li>
<li>mysql2: Conectar e mandar comandos SQL para o banco;</li>
<li>cors: Mecanismo para adicionar cabeçalhos HTTP que informam aos navegadores para permitir que uma aplicação web seja executada em origem e acesse recursos de outra origem diferente</li>




<h2>Abrir o arquivo no VSCODE</h2>

````
code . 
````
<h3>Agora criar um folder dentro do html com o nome dp_config.js</h3>

<h3>Dentro do dp_config.js:</h3>

<li>linkar o mysql com o VSCODE</li>

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

