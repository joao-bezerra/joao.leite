var fs = require('fs');

fs.readFile('imagem.jpg', function(errer, buffer){
          console.log('arquivo lido');

      fs.writeFile('imagem.jpg',buffer, function(err){
          console.log('arquivo escrito');
      });    

});