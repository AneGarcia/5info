import express from 'express';
const app = express();
const port = 3000

app.set('view engine', 'ejs')
app.use(express.urlencoded({extended: true}))

app.get('/', (req, res)=>{
    res.render('index')
})

app.get('/calculadora', (req, res) =>{
    res.render('exerc_calculadora')
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

app.post('/pesquisar', (req,res) => {
    res.send("Dados recebidos: "+ req.body.nome)
})

app.post('/calculadora', (req,res) =>{
    const soma = parseInt(req.body.valor1)+parseInt(req.body.valor2)
    res.send("O resultado da soma é " + soma)
})

app.listen(port)