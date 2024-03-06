import express from 'express';
import { abrecalculadora, abretabela, calculadora, escrevenome, escrevenomesobrenome, hellonome, helloworld, pesquisar, soma, tabela } from '../controllers/controllers.js';
const router = express.Router();

router.get('/', helloworld)

router.get('/Anelise', hellonome)

router.get('/calculadora', abrecalculadora)

router.get('/tabela', abretabela)

router.get('/:nome', escrevenome)

router.get('/:nome/:sobrenome', escrevenomesobrenome)

router.get('/soma/:n1/:n2', soma)

router.post('/pesquisar', pesquisar)

router.post('/calculadora', calculadora)

router.post('/tabela', tabela)

export default router;