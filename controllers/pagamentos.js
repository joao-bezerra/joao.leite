module.exports = function(app){
 app.get('/pagamentos', function(req, res){
    console.log('Recebida requisicao de pagamento.')
      res.send('OK.');
          });

}
