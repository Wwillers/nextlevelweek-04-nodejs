import { Router } from 'express';
import { SendMailController } from './controllers/SendMailController';
import { SurveyController } from './controllers/SurveyController';
import { UserController } from './controllers/UserController';

const router = Router();

const userController = new UserController();
const surveyController = new SurveyController();
const sendMail = new SendMailController();

//Users
router.post('/users', userController.create);

//Surveys
router.post('/surveys', surveyController.create);
router.get('/surveys', surveyController.show);

//Mail
router.post('/sendMail', sendMail.execute);

export { router };
