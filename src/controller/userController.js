import User from '../module/User';
import Country from '../module/Country';
import Capital from '../module/Capital';
import catchAsync from '../util/catchAsync';
import { sequelize } from '../Database/serviceDatabase';

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
    res.status(200).json({
        message: 'Success',
    });
});

// Country.bulkCreate([
//     {
//         countryName: 'Việt Nam',
//     },
//     {
//         countryName: 'Lào',
//     },
//     {
//         countryName: 'Trung quốc',
//     },
//     {
//         countryName: 'Đức',
//     },
//     {
//         countryName: 'Nhật Bản',
//     },
// ]);

// Capital.bulkCreate([
//     {
//         cappitalName: 'Hà Nội',
//     },
//     {
//         cappitalName: 'Viên chăm',
//     },
//     {
//         cappitalName: 'Bắc kinh',
//     },
//     {
//         cappitalName: 'Berlin',
//     },
//     {
//         cappitalName: 'Tokyo',
//     },
// ]);
