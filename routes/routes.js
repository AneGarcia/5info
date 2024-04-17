import express from 'express';
const router = express.Router();
import autenticacao from '../config/autenticacao.js'

import passport from '../config/passport.js';

//import { upload,helloworld,hellonome,abrecalculadora,calculadora,abretabela,tabela,qualquernome,nomesobrenome,soma,pesquisar, abrirupload } from '../controllers/controllers.js';

import {abretela, abrelogin,cadastrausuario, mostrausuarios,buscarusuarios,abretelaeditar,editarusuario,deletausuario} from '../controllers/controllers.js';
import {abrepost, addpost,listpost,postfiltro,deletepost,abreeditpost,editpost} from '../controllers/controllers.js';

import multer from 'multer';
const foto = multer({dest:'./public'})

router.get('/', abrelogin)
router.post('/', passport.authenticate('local', {
    successRedirect: '/usuario',
    failureRedirect: '/'
}));

router.get('/usuario',autenticacao, abretela)
router.post('/usuario',autenticacao, foto.single('foto'), cadastrausuario)

router.get('/mostrausuarios', autenticacao, mostrausuarios)
router.post('/mostrausuarios',autenticacao, buscarusuarios)

router.get('/editarusuario/:id',autenticacao, abretelaeditar)
router.post('/editarusuario/:id',autenticacao, editarusuario)

router.get('/deletarusuario/:id',autenticacao, deletausuario)



router.get('/post',autenticacao, abrepost)
router.post('/post',autenticacao, foto.single('foto'), addpost)

router.get('/listpost',autenticacao, listpost)
router.post('/listpost',autenticacao, postfiltro)

router.get('/editpost/:id',autenticacao, abreeditpost)
router.post('/editpost/:id',autenticacao, foto.single('foto'), editpost)

router.get('/deletepost/:id',autenticacao, deletepost)

/*
router.get('/', helloworld)

router.get('/anelise', hellonome)

//rota para abrir a página calculadora.ejs
router.get('/calculadora', abrecalculadora)

//rota para receber dados da calculadora e mostrar o resultado final
router.post('/calculadora', calculadora)

router.get('/tabela', abretabela)

router.post('/tabela', tabela)

router.get('/upload', abrirupload)
router.post('/upload', foto.single('foto') , upload)

router.get('/:nome', qualquernome)

router.get('/:nome/:sobrenome', nomesobrenome)

router.get('/soma/:x/:y', soma)

router.post('/pesquisar', pesquisar)

*/

export default router;
