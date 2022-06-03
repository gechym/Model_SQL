import { sequelize } from '../util/serviceDatabase';
const Sequelize = require('sequelize');

const User = sequelize.define('tb_users', {
    id: {
        type: Sequelize.DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false,
    },
    name: {
        type: Sequelize.DataTypes.STRING,
        allowNull: false,
    },
    rule: {
        type: Sequelize.DataTypes.STRING,
        allowNull: false,
        defaultValue: 'user',
    },
    email: {
        type: Sequelize.DataTypes.STRING,
        allowNull: false,
        validate: {
            isEmail: {
                msg: 'Email không phù h',
            },
        },
        unique: {
            msg: 'Đã có người đăng ký bằng email này, vui lòng thử email khác ',
        },
    },
    password: {
        type: Sequelize.DataTypes.STRING,
        allowNull: false,
        validate: {
            len: [8, 100000000],
        },
    },
    passwordChangeAt: {
        type: Sequelize.DataTypes.DATE,
        default: null,
    },
    passwordResetToken: {
        type: Sequelize.DataTypes.STRING,
        default: null,
    },
    passwordResetExpires: {
        type: Sequelize.DataTypes.STRING,
        default: null,
    },
    photo: {
        type: Sequelize.DataTypes.STRING,
    },
    active: {
        type: Sequelize.DataTypes.BOOLEAN,
        defaultValue: true,
    },
});

export default User;
