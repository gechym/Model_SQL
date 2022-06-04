import { sequelize } from '../Database/serviceDatabase';
import Sequelize from 'sequelize';

var Post = sequelize.define(
    'post',
    {
        message: {
            type: Sequelize.DataTypes.STRING,
        },
    },
    {
        timestamps: false,
    },
);

export default Post;
