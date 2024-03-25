import express from 'express';
import { abrecalculadora, abretabela, calculadora, escrevenome, escrevenomesobrenome, hellonome, helloworld, pesquisar, soma, tabela,abreupload,upload} from '../controllers/controllers.js';
import {abreCadastro,cadastro} from '../controllers/controllers.js';
const router = express.Router();

import multer from 'multer';
const foto = multer({dest:'./public'})


router.get('/cadastro', abreCadastro)
router.post('/cadastro', foto.single('foto'), cadastro)

// router.get('/', helloworld)

// router.get('/Anelise', hellonome)

// router.get('/calculadora', abrecalculadora)

// router.get('/tabela', abretabela)

// router.get('/upload', abreupload)
// router.post('/upload', foto.single('foto'), upload)

// router.get('/:nome', escrevenome)

// router.get('/:nome/:sobrenome', escrevenomesobrenome)

// router.get('/soma/:n1/:n2', soma)

// router.post('/pesquisar', pesquisar)

// router.post('/calculadora', calculadora)

// router.post('/tabela', tabela)

export default router;