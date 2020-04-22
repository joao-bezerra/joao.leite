module.exports = function (app) {
          app.get('/pagamentos', function (req, res) {
                    console.log('Recebida requisicao de pagamento.')
                    res.send('OK.');
          });

          app.post('/pagamentos/pagamento', function (req, res) {
                    var pagamento = req.body;
                    console.log('procesando uma requisicao de um novo pagto');

                    pagamento.status = 'CRIADO';
                    pagamento.data =new Date;

                    res.send('OK.');


          });

}
