<h1>Portal do Oráculo</h1>

##Informações do trabalho
*Banco de dados
*Rota de Login
*Rota de Cadastro de usuario
*Rota de Cadastro de produtos

##Criando o banco de dados

Criando a databse
`create database PortalDoOraculo;`

Selecionar a database
`use PortalDoOraculo;`

Criar a tabela de usuarios
`create table usuario(
    id_usuario int not null primary key auto_increment,
    nomeUsuario varchar(500) not null,
    email varchar(500) not null unique,
    senha varchar(20) not null unique
);
`
Criar a tabela de produtos
`create table produtos(
    id_produtos int not null primary key auto_increment,
    nomeProduto varchar(500) not null,
    precoProdutos float not null,
    descricao varchar(1000) not null,
    qtdDisponivel float
);`
Criar tabela de carrinho fazendo um link com usuario e produtos
`create table carrinho(
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
`
Para testar 
`select * from produtos;`
                      
