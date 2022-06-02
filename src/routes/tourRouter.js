import express from 'express';
import {
    createTour,
    getTour,
    getTours,
    deleteTour,
    updateTour,
} from '../controller/tourContrller';

const tourRouter = express.Router();

tourRouter.route('/').get(getTours).post(createTour);
tourRouter.route('/:id').get(getTour).put(updateTour).delete(deleteTour);

export default tourRouter;
