import { sequelize } from '../Database/serviceDatabase';
import Sequelize from 'sequelize';

var Product = sequelize.define(
    'product',
    {
        productName: {
            type: Sequelize.DataTypes.STRING,
            unique: {
                msg: 'Tên sản phẩm không được trùng nhau',
            },
        },
    },
    {
        timestamps: false,
    },
);

export default Product;
