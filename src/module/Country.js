import { sequelize } from '../Database/serviceDatabase';
import Sequelize from 'sequelize';

var Country = sequelize.define(
    'country',
    {
        countryName: {
            type: Sequelize.DataTypes.STRING,
            unique: {
                msg: 'Tên quốc gia không được trùng!!',
            },
        },
    },
    {
        timestamps: false,
    },
);

export default Country;
