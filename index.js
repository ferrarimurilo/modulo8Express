const express = require("express");

const app = express();

const porta = 3000;

app.get('/segundaRota',(req,res) => {
    res.send(`Saudações Terraquio!!`);
})

app.get('/cadastro/:nome/:idade/:curso',(req,res) => {
    req.params;
    res.send(`O nome digitado foi ${req.params.nome} a idade é ${req.params.idade} e o curso é ${req.params.curso}`);
})

app.listen(porta, () => {
    console.log(`O servidor está ativo pela porta ${porta}`);

});


