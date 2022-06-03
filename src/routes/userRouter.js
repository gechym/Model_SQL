import express from 'express';
import { getUsers, login, signUp, protect, checkRules } from '../controller';

const userRouter = express.Router();

userRouter.route('/signup').post(signUp);
userRouter.route('/login').post(login);

userRouter.route('/').get(protect, checkRules('admin'), getUsers);

export default userRouter;
