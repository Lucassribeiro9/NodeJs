var http = require('http');


var server = http.createServer(function(req, res){
    var categoria = req.url;

    if(categoria == '/tecnologia'){
        res.end("<html><body>Notícias de TI</body></html>")
    }
    else if(categoria == '/moda'){
        res.end("<html><body>Notícias sobre moda</body></html>")
    }
    else if(categoria == '/esportes'){
        res.end("<html><body>Noticias sobre esportes</body></html>")
    }
    else{
        res.end("<html><body>Portal de notícias</body></html>")
    }
}).listen(3000);

