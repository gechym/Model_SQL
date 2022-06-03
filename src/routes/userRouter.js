import express from 'express';
import { getUsers, login, signUp } from '../controller';

const userRouter = express.Router();

userRouter.route('/signup').post(signUp);
userRouter.route('/login').post(login);

userRouter.route('/').get(getUsers);

export default userRouter;
