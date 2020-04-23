module.exports = function (app) {
          app.get('/pagamentos', function (req, res) {
                    console.log('Recebida requisicao de pagamento.')
                    res.send('OK.');
          });

          app.post('/pagamentos/pagamento', function (req, res) {

                    req.assert("forma_de_pagamento",
                     "Forma de pagamento eh obrigatorio").notEmpty();
                    req.assert("valor",
                     "Valor eh obrigatorio e deve ser um decimal")
                     .notEmpty().isFloat();

                     var erros = req.validationErrors();

                     if (erros){
                        console.log("Erros de validação encontrados");
                        res.status(400).send(erros);
                        return;
                     }

                    var pagamento = req.body;
                    console.log('procesando uma requisicao de um novo pagto');

                    pagamento.status = 'CRIADO';
                    pagamento.data = new Date;

                    var connection = app.persistencia.connectionFactory();
                    var pagamentoDao = new app.persistencia.PagamentoDao(connection);

                    pagamentoDao.salva(pagamento, function(erro, resultado){
                        if (erro){
                           console.log('Erro ao inserir no banco:'+ erro);       
                           res.status(400).send(erro);       
                        } else {
                        console.log('pagamento criado');
                        res.json(pagamento); 
                        }      
                             
                    });
         
                   });

}
