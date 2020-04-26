### Testando serviço:
```bash
$ curl http://localhost:3000/pagamentos/pagamento -X POST -v -H "Content-type: application/json" -d @files/pagamento.json | json_pp

$ curl -X PUT http://localhost:3000/pagamentos/pagamento/10 -v
```
### acesso ao mysql:
````bash
 $ mysql -u root; ou mysql -u root -p -h localhost

 ### Comando para alterar a senha do root:
 mysql> alter user 'root'@'localhost' IDENTIFIED BY 'nova_senha_complexa';
Query OK, 0 rows affected (0.00 sec)

### Comando para alterar a senha do root e deixar mysql_native_password:
 ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY '';

````

### Versão do express-Validator >=5.3.1
$ npm install --save express-Validator@5.3.1

Executar pelo _terminal_ a partir do diretório do projeto o seguinte comando para iniciar o serviço local:

```bash
$ nodemon index.js
$ 
 
 ### os principais códigos e seus significados:
100 Continue: o servidor recebeu a solicitação e o cliente pode continuar a comunicação.
200 Ok: tudo ocorreu como esperado.
201 Created: um novo recurso foi criado no servidor.
301 Moved: a url solicitada foi movida.
400 Bad Request: problemas na requisição do cliente.
404 Not Found: a url solicitada não foi encontrada.
500 Internal Server Error: algo inesperado aconteceu do lado do servidor
---

Preparando o ambiente para salvar no banco:

Abra um terminal, conecte no banco de dados e crie o banco payfast para ser utilizado na aplicação:

    mysql -u root
Uma vez logado, execute o comando que cria o banco e passe a utilizá-lo:

    create database payfast;
    use payfast;
Utilize o script abaixo para criar a tabela de pagamentos:

    CREATE TABLE `pagamentos` (
        `id` int(11) NOT NULL AUTO_INCREMENT,
       `forma_de_pagamento` varchar(255) NOT NULL,
       `valor` decimal(10,2) NOT NULL,
       `moeda` varchar(3) NOT NULL,
       `status` varchar(255) NOT NULL,
       `data` DATE,
       `descricao` text,
        PRIMARY KEY (id)
       );
Para ter certeza que tudo ocorreu bem, você pode executar um comando do sql que exibe as tabelas existentes no banco:

    show tables;