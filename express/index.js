const express = require("express");
const app = express();

app.get("/teste/:nome/:sobrenome", function(req,res){
    res.send(req.params.nome + " - " + req.params.sobrenome);
});

app.get("/teste/:naoobrigatorio?", function(req,res){
    var artigo = req.params.naoobrigatorio;
    artigo ? res.send(artigo) : res.send("Sem parametro");
});

app.get("/querystring", function(req,res){
    var canal = req.query["canal"];
    canal ? res.send(canal) : res.send("Sem queryString");
});

app.listen(3000, function(erro){
    erro ? console.log("Erro") : console.log("Servidor iniciado com sucesso");
})