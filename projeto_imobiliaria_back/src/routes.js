import { Router } from 'express';
import UserController from './controllers/UserController';
import SessionController from './controllers/SessionController';
import auth from './middlewares/auth';
import ImovelController from './controllers/ImovelController';

const router = Router();

router.post('/createusers', UserController.createUser);
router.get('/listusers', auth, UserController.findAllUser);
router.post('/session', SessionController.createSession);
router.post('/createimovel', ImovelController.createImovel);
router.get('/listimovel', ImovelController.findAllImovel);
router.get('/listimovel/:id', ImovelController.findImovel);


export { router }