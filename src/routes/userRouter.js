import express from 'express';
import {
    getUsers,
    login,
    signUp,
    protect,
    checkRules,
    forgotPassword,
    resetPassword,
    test,
} from '../controller';

const userRouter = express.Router();

userRouter.route('/signup').post(signUp);
userRouter.route('/login').post(login);
userRouter.route('/forgotPassword').patch(forgotPassword);
userRouter.route('/resetPassword/:resetToken').patch(resetPassword);

userRouter.route('/').get(protect, checkRules('admin'), getUsers);
userRouter.route('/test').get(test);

export default userRouter;
