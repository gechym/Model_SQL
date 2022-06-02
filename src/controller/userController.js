import User from '../module/User';
import catchAsync from '../util/catchAsync';

export const getUsers = catchAsync(async (req, res) => {
    // await User.sync({ force: true });

    // const user = await User.create({
    //     name: 'Nguyễn Văn A',
    //     email: 'A@gmail.com',
    //     password: '123123123',
    //     photo: '2.png',
    // });

    // await user.destroy();

    // await user.reload();

    // await User.bulkCreate([
    //     {
    //         name: 'Nguyễn Văn D',
    //         email: 'D@gmail.com',
    //         password: '123123123',
    //         photo: '2.png',
    //     },
    //     {
    //         name: 'Nguyễn Văn E',
    //         email: 'E@gmail.com',
    //         password: '123123123',
    //         photo: '2.png',
    //     },
    //     {
    //         name: 'Nguyễn Văn F',
    //         email: 'F@gmail.com',
    //         password: '123123123',
    //         photo: '2.png',
    //     },
    //     {
    //         name: 'Nguyễn Văn G',
    //         email: 'G@gmail.com',
    //         password: '123123123',
    //         photo: '2.png',
    //     },
    // ]);

    const user = await User.create({
        name: 'H',
        email: 'H@gmail.com',
        password: '123123123',
        photo: '2.png',
    });

    const users = await User.findAll({
        // SELECT name, email FROM ...
        attributes: ['name', 'email'],
    });

    res.status(200).json({
        message: 'success',
        requestTime: req.requestTime,
        data: {
            user: users,
        },
    });
});
