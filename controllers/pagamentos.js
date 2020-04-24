module.exports = function (app) {
          app.get('/pagamentos', function (req, res) {
                    console.log('Recebida requisicao de teste na porta 3000.')
                    res.send('OK.');
          });

          app.post('/pagamentos/pagamento', function (req, res) {
              var pagamento = req.body;
              
                    req.assert("forma_de_pagamento",
                     "Forma de pagamento eh obrigatorio").notEmpty();
                    req.assert("valor",
                     "Valor eh obrigatorio e deve ser um decimal")
                     .notEmpty().isFloat();

                     var errors = req.validationErrors();

                     if (errors){
                        console.log("Erros de validação encontrados");
                        res.status(400).send(errors);
                        return;
                     }

                  console.log('procesando uma requisicao de um novo pagto');

                    pagamento.status = 'CRIADO';
                    pagamento.data = new Date;

                    var connection = app.persistencia.connectionFactory();
                    var pagamentoDao = new app.persistencia.PagamentoDao(connection);

                    pagamentoDao.salva(pagamento, function(erro, resultado){
                        if (erro){
                           console.log('Erro ao inserir no banco:' + erro);       
                           res.status(500).send(erro);       
                        } else {
                        console.log('pagamento criado' + resultado);

                        res.location('/pagamentos/pagamento/' +
                           resultado.insertId);
                           
                        pagamento.id = resultado.insertId;

                        res.status(201).json(pagamento); 
                        }      
                             
                    });
         
                   });

}
