import Capital from '../module/Capital';
import Country from '../module/Country';
import HoaDonBanHang from '../module/HoaDonBanHang';
import Post from '../module/post';
import Product from '../module/product';
import User from '../module/User';
import catchAsync from '../util/catchAsync';

export const getUsers = catchAsync(async (req, res, next) => {
    const user = await User.findAll({
        attributes: {
            exclude: [`password`, `passwordChangeAt`, `passwordResetToken`, `passwordResetExpires`],
        },
    });

    res.status(200).json({
        message: 'success',
        requestTime: req.requestTime,
        user: req.user,
        data: {
            user: user,
        },
    });
});
export const test = catchAsync(async (req, res, next) => {
    const country = await Country.findAll({ include: [Capital] });
    const user = await User.findAll({ include: [Post] });

    res.status(200).json({
        message: 'Success',
        country,
        user,
    });
});
