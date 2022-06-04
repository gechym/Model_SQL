import Tour from '../module/Tour';
import catchAsync from '../util/catchAsync';

export const createTour = catchAsync(async (req, res, next) => {
    const tour = await Tour.create(req.body);

    res.status(200).json({
        message: 'success',
        data: tour,
    });
});

export const getTours = catchAsync(async (req, res, next) => {
    const tour = await Tour.findAll();

    res.status(200).json({
        message: 'success',
        data: tour,
    });
});
