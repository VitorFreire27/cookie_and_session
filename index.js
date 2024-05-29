const express = require('express')
const session = require('express-session')

// criação de um aplicativo express
const app = express()

// criação de uma rota chamada '/setcookie' no modo GET para geração de um arquivo cookie
app.get('/setcookie', (req, res) => {
    res.cookie(`Acesso`,`Acessado em ${new Date()}`);
    res.send('Cookie foi salvo com sucesso');    
});

// criação de uma rota chamada '/setsession' no modo GET para geração de uma sessão com um contador
// de requisições feitas
app.use(session({
    secret: 'Ax0$%s14@FX2az1k^2nM', // cahve de segurança
    resave: true,
    saveUninitialized: true
}))

app.get('/session', (req,res) => {
    let contagem = 0;
    if(req.session.contagem) contagem = req.session.contagem;
    contagem++;
    req.session.contagem = contagem;
    res.send(`Valor atual: ${contagem}`);
})

app.get('setsess')


// permite o servidor rodar escutando a porta 3000
app.listen(3000, ()=>console.log('servidor executando')); // '()=>' é uma callback