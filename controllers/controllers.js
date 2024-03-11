export function helloworld(req, res){
    res.render('index')
}
export function hellonome(req, res){
    res.send('Hello Anelise!')
}
export function abrecalculadora(req, res){
    res.render('exerc_calculadora')
}
export function abretabela(req,res){
    res.render('exerc_tabela')
}
export function escrevenome(req, res){
    res.send(req.params.nome)
}
export function escrevenomesobrenome(req, res){
    res.send(req.params.nome+" "+req.params.sobrenome)
}
export function soma(req, res){
    const resultado = parseInt(req.params.n1)+parseInt(req.params.n2)
    res.send("O resultado da soma é " + resultado)
}
export function pesquisar(req,res){
    res.send("Dados recebidos: "+ req.body.nome)
}
export function calculadora(req,res){
    const operacao = req.body.operacao;
    var resultado;

    if(operacao == "soma"){
        resultado = parseInt(req.body.valor1)+parseInt(req.body.valor2);
    }
    else if(operacao == "subtracao"){
        resultado = parseInt(req.body.valor1)-parseInt(req.body.valor2);
    }
    else if(operacao == "divisao"){
        resultado = parseInt(req.body.valor1)/parseInt(req.body.valor2);
    }
    else if(operacao == "multiplicacao"){
        resultado = parseInt(req.body.valor1)*parseInt(req.body.valor2);
    }
    res.render('exerc_calculadora',{operacao:operacao, resultado:resultado});
    //res.send("O resultado da "+operação+" é " + resultado)
}
export function tabela(req,res){
    res.render('exerc_tabela',{linhas:req.body.linhas, colunas:req.body.colunas});
}
export function abreupload(req,res){
    res.render('upload')
}
export function upload(req,res){
    res.send("<img src='/"+req.file.filename+"'>")
}
export function abreCadastro(req,res){
    res.render('exerc_cadastro',{foto:req.file.filename, nome:req.body.nome, email:req.body.email, senha:req.body.senha})
}