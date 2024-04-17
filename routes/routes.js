import express from 'express';
const router = express.Router();

//import { upload,helloworld,hellonome,abrecalculadora,calculadora,abretabela,tabela,qualquernome,nomesobrenome,soma,pesquisar, abrirupload } from '../controllers/controllers.js';

import {abretela,cadastrausuario, mostrausuarios,buscarusuarios,abretelaeditar,editarusuario,deletausuario} from '../controllers/controllers.js';
import {abrepost, addpost,listpost,postfiltro,deletepost,abreeditpost,editpost} from '../controllers/controllers.js';

import multer from 'multer';
const foto = multer({dest:'./public'})

router.get('/post', abrepost)
router.post('/post', foto.single('foto'), addpost)

router.get('/listpost', listpost)
router.post('/listpost', postfiltro)

router.get('/editpost/:id', abreeditpost)
router.post('/editpost/:id', foto.single('foto'), editpost)

router.get('/deletepost/:id', deletepost)

router.get('/usuario', abretela)
router.post('/usuario', foto.single('foto'), cadastrausuario)

router.get('/mostrausuarios', mostrausuarios)
router.post('/mostrausuarios', buscarusuarios)

router.get('/editarusuario/:id', abretelaeditar)
router.post('/editarusuario/:id', editarusuario)

router.get('/deletarusuario/:id', deletausuario)

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
