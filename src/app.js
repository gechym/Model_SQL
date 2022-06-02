require('dotenv').config({ path: './config.env' });
import express from 'express';
import morgan from 'morgan';

import { tourRouter, userRouter } from './routes';

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
    next();
});

app.use('/api/v1/tours', tourRouter);
app.use('/api/v1/users', userRouter);

export default app;
