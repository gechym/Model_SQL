import { sequelize } from './serviceDatabase';
import Country from '../module/Country';
import Capital from '../module/Capital';

const connectDatabase = async () => {
    try {
        Country.hasOne(Capital);
        Capital.belongsTo(Country);

        sequelize
            .sync({ force: true })
            .then((result) => {
                console.log('\n\n\n👉 Đồng bộ server thành công \n\n\n' + result);
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
