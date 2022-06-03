import User from '../module/User';
import catchAsync from '../util/catchAsync';

export const getUsers = catchAsync(async (req, res) => {
    const user = await User.findAll();
    res.status(200).json({
        message: 'success',
        requestTime: req.requestTime,
        user: req.user,
        data: {
            user: user,
        },
    });
});
