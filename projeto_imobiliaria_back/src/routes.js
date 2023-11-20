import { Router } from 'express';
import UserController from './controllers/UserController';
import SessionController from './controllers/SessionController';
import ImovelController from './controllers/ImovelController';
import multer from 'multer';
import uploadCfg from './middlewares/upload';
import MessageController from './controllers/MessageController';

const upload  = multer(uploadCfg);

const router = Router();

router.post('/createusers', UserController.createUser);
router.get('/listusers', UserController.findAllUser);
router.get('/listusers/:userId', UserController.findUser);
router.post('/session', SessionController.createSession);
router.post('/createimovel',  upload.single("thumb"), ImovelController.createImovel);
router.get('/listimovel', ImovelController.findAllImovel);
router.get('/listimovel/:slug', ImovelController.findImovel);
router.post('/createmessage', MessageController.createMessage);
router.get('/listmessage/:id', MessageController.findMessage);


export { router }