var fs = require('fs');

fs.createReadStream('etiqueta.jpg')
  .pipe(fs.createWriteStream('etiqueta-com-stream.jpg'))
  .on('finish', function(){
      console.log('arquivo escrito com stream');      
  });        