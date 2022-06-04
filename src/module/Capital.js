import { sequelize } from '../Database/serviceDatabase';
import Sequelize from 'sequelize';

var Capital = sequelize.define(
    'capital',
    {
        cappitalName: {
            type: Sequelize.DataTypes.STRING,
            unique: {
                msg: 'tên thủ đô không được trùng',
            },
        },
    },
    {
        timestamps: false,
    },
);

export default Capital;
