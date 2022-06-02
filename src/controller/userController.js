import User from '../module/User';

export const getUsers = async (req, res) => {
    const user = await User.create({
        name: 'nguyễn Đức Bảo',
        email: 'ndbao.20it6@vku.udn.vn',
        password: '123123123',
        photo: '1.png',
    });

    res.status(200).json({
        message: 'success',
        requestTime: req.requestTime,
        data: {
            user: user,
        },
    });
};
