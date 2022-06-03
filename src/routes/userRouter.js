import express from 'express';
import { getUsers, login, signUp, protect } from '../controller';

const userRouter = express.Router();

userRouter.route('/signup').post(signUp);
userRouter.route('/login').post(login);

userRouter.route('/').get(protect, getUsers);

export default userRouter;
