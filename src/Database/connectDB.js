import { sequelize } from './serviceDatabase';
import Country from '../module/Country';
import Capital from '../module/Capital';
import User from '../module/User';
import Post from '../module/post';
import Product from '../module/product';
import HoaDonBanHang from '../module/HoaDonBanHang';

const connectDatabase = async () => {
    try {
        // 1 - 1
        Country.hasOne(Capital, { foreignKey: 'id_country' });
        Capital.belongsTo(Country, { foreignKey: 'id_country' });
        // Country.hasOne(Capital, { onUpdate: 'CASCADE', onDelete: 'CASCADE' });
        // Capital.belongsTo(Country, { onDelete: 'CASCADE', onUpdate: 'CASCADE' });

        // 1 - Nhiều
        User.hasMany(Post, { foreignKey: 'id_user' });
        Post.belongsTo(User, { foreignKey: 'id_user' });

        // nhiều - nhiều
        // User.belongsToMany(Product, { through: 'HoaDonBanHang', foreignKey: 'id_User' });
        // Product.belongsToMany(User, { through: 'HoaDonBanHang', foreignKey: 'id_Product' });
        User.belongsToMany(Product, { through: HoaDonBanHang });
        Product.belongsToMany(User, { through: HoaDonBanHang });

        sequelize
            .sync({ alert: true })
            .then((result) => {
                console.log('\n\n\n👉 Đồng bộ server thành công \n\n\n');
            })
            .catch((err) => {
                console.log(err);
            });
        await sequelize.authenticate();

        console.log('Connection has been established successfully.');
    } catch (error) {
        console.error('Unable to connect to the database:', error);
    }
};

export default connectDatabase;
