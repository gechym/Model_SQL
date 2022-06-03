require('dotenv').config({ path: './config.env' });
import express from 'express';
import morgan from 'morgan';
import handleError from './controller/HandleError';

import { userRouter } from './routes';
import AppError from './util/AppError';

const app = express();

//config
app.use(express.json());
app.use(
    express.urlencoded({
        extended: true,
    }),
);
app.use(express.static(`${__dirname}/public`)); // khai các file

app.use(morgan('dev'));

app.use((req, res, next) => {
    console.log('hello middleware 😘');
    req.requestTime = new Date().toISOString();
    console.log(req.headers);
    next();
});

app.use('/api/v1/users', userRouter);
app.use('*', (req, res, next) => {
    return next(new AppError('404', 404));
});

app.use(handleError());

export default app;
