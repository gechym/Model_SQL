import express from 'express';
import {
    createUser,
    deleteUser,
    getUser,
    getUsers,
    updateUser,
} from '../controller';

const userRouter = express.Router();

userRouter.route('/').get(getUsers).post(createUser);
userRouter.route('/:id').get(getUser).delete(deleteUser).put(updateUser);

export default userRouter;
