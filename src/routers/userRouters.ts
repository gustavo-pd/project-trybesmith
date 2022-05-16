import { Router } from 'express';
import UserController from '../controllers/UserController';
import UserMiddleware from '../middlewares/UserMiddleware';

const userController = new UserController();
const userMiddleware = new UserMiddleware();

const route = Router();

route.post(
  '/',
  userMiddleware.usernameVal,
  userMiddleware.classeVal,
  userMiddleware.levelVal,
  userMiddleware.passwordVal,
  userController.create,
);

export default route;