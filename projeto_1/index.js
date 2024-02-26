import express from 'express';
const app = express();
const port = 3000

app.get('/', (req, res)=>{
    res.send('Hello World!')
})

app.get('/Anelise', (req, res)=>{
    res.send('Hello Anelise!')
})

app.get('/:nome', (req, res)=>{
    res.send(req.params.nome)
})

app.get('/:nome/:sobrenome', (req, res)=>{
    res.send(req.params.nome+" "+req.params.sobrenome)
})

app.get('/soma/:n1/:n2', (req, res)=>{
    const resultado = parseInt(req.params.n1)+parseInt(req.params.n2)
    res.send("O resultado da soma é " + resultado)
})

app.listen(port)