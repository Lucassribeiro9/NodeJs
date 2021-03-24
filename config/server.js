var express = require('express'); // note que estamos fazendo o require do próprio framework; retorna uma função
var app = express(); // executa a função que está na variavel express
app.set('view engine', 'ejs');
app.set('views', './app/views') /* ('propriedade', 'parametro'). Vai pesquisar a partir de onde
o módulo é incluído
*/

module.exports = app;