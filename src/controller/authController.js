import bcryptjs from 'bcryptjs';
import jwt from 'jsonwebtoken';

import User from '../module/User';
import AppError from '../util/AppError';
import catchAsync from '../util/catchAsync';

const createToken = (newUser) => {
    return jwt.sign(
        {
            id: newUser.id,
            name: newUser.name,
        },
        process.env.JWT_SECRET_KEY,
        {
            expiresIn: process.env.TOKEN_JWT_HET_HAN,
        },
    );
};

export const signUp = catchAsync(async (req, res, next) => {
    const { name, email, password, passwordConfig } = req.body;
    if (!name || !email || !password || !passwordConfig) {
        return next(new AppError('Vui lòng điền đầy đủ thông tin', 404));
    }

    if (password !== passwordConfig)
        return next(new AppError('Không khớp mật khẩu', 404));

    if (password.length < 8) {
        return next(
            new AppError('Mật khẩu quá kếu vui lòng nhập trên 8 ký tự', 404),
        );
    }

    const passwordHash = await bcryptjs.hash(password, 12);
    const user = await User.create({
        name,
        email,
        password: passwordHash,
    });

    const token = createToken(user);
    res.status(200).json({
        message: 'success',
        token: token,
        data: {
            user: user,
        },
    });
});

export const login = catchAsync(async (req, res, next) => {
    const { email, password } = req.body;

    if (!email || !password)
        return next(new AppError('Vui lòng nhập email và password', 404));

    const user = await User.findOne({
        where: { email: email },
    });

    if (!user)
        return next(new AppError('Email không tồn tại, vui lòng thử lại', 404));

    const checkPassword = await bcryptjs.compare(password, user.password);

    if (!checkPassword) return next(new AppError('mật khẩu không đúng'), 404);

    const token = createToken(user);
    res.status(200).json({
        message: 'success',
        token: token,
        data: {
            user: user,
        },
    });
});
