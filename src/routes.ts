import { Router } from 'express';
import { AnswerController } from './controllers/AnswerController';
import { NpsController } from './controllers/NpsController';
import { SendMailController } from './controllers/SendMailController';
import { SurveyController } from './controllers/SurveyController';
import { UserController } from './controllers/UserController';

const router = Router();

const userController = new UserController();
const surveyController = new SurveyController();
const sendMail = new SendMailController();
const answerController = new AnswerController();
const npsController = new NpsController();

//Users
router.post('/users', userController.create);

//Surveys
router.post('/surveys', surveyController.create);
router.get('/surveys', surveyController.show);

//Mail
router.post('/sendMail', sendMail.execute);

//Answers
router.get('/answers/:value', answerController.execute);

//NPS
router.get('/nps/:survey_id', npsController.execute);

export { router };
