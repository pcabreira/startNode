var http = require("http");

http.createServer(function(requisicao,resposta){
    resposta.end("Bem vindo");
}).listen(8181);

console.log("Servidor rodando");