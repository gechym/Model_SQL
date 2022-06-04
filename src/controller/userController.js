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
    // const country = await Country.findOne({ where: { countryName: 'Việt Nam' } });
    // const capital = await Capital.findOne({ where: { cappitalName: 'Viên Chăm' } });

    // // await country.setCapital(capital);
    // await capital.setCountry(country);

    const product = await Product.findAll();

    const listUser = await User.findAll({
        include: [Product, Post],
    });

    res.status(200).json({
        message: 'Success',
        product,
        listUser,
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
