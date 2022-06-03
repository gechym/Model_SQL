import bcryptjs from 'bcryptjs';
import jwt from 'jsonwebtoken';
import { promisify } from 'util';

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

export const checkRules =
    (...rules) =>
    (req, res, next) => {
        if (!rules.includes(req.user.rule))
            return next(new AppError('Bạn ko có quyền truy cập URL này'));

        next();
    };

export const protect = catchAsync(async (req, res, next) => {
    // lấy token
    const { authorization } = req.headers;
    let token;

    //https://anonystick.com/blog-developer/bearer-token-la-gi-neu-khong-co-bearer-truoc-token-2021052140045637#:~:text=Theo%20c%C3%A1c%20t%C3%A0i%20li%E1%BB%87u%20th%C3%AC,lu%C3%B4n%20mang%20theo%20token%20n%C3%A0y.
    if (authorization && authorization.startsWith('Bearer')) {
        token = authorization.split(' ')[1];
    }

    if (!token) return next(new AppError('Bạn chưa đăng nhập', 404));

    // verify token
    let decode = await promisify(jwt.verify)(token, process.env.JWT_SECRET_KEY);
    decode = {
        ...decode,
        decode_iat: new Date(decode.iat * 1000).toLocaleString(),
        decode_exp: new Date(decode.exp * 1000).toLocaleString(),
    };
    console.log(decode);

    // check user
    const currentUser = await User.findOne({
        where: {
            id: decode.id,
            name: decode.name,
        },
    });
    if (!currentUser) {
        return next(
            new AppError('Lỗi xác thực danh tính ,Vui lòng đăng nhập lại', 404),
        );
    }

    // // check đổi pass khi token còn hạn => bắt user login lại
    console.log(decode.iat * 1000, currentUser.passwordChangeAt.getTime());

    if (decode.iat * 1000 < currentUser.passwordChangeAt.getTime())
        return next(
            new AppError(
                `Bạn đã đổi password ngày ${currentUser.passwordChangeAt.toLocaleString()} , vui lòng đăng nhập lại`,
                404,
            ),
        );

    req.user = currentUser;
    next();
});
