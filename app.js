var app = require('./config/server');

var routeNews = require('./app/routes/noticias')(app); // pra executar a função

var routeHome = require('./app/routes/home')(app);

var routeFormNews = require('./app/routes/formulario_inclusao_noticia')(app);

app.listen(3000, function(){
    console.log("Server ON")
}); // função com callback, pra retornar caso tenha sucesso

/* notas:
express: framework que fará uma interface entre os nossos scripts e o node, fazendo o nosso código
dentro das diretrizes do framework

Não precisamos tratar a URL, como na aula anterior. Usamos a função get informando o caminho e o parâmetro (outra função de callback)
Note que não precisamos usar a estrutura de condição neste caso */
