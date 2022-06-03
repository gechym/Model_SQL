import Sequelize from 'sequelize';

export const sequelize = new Sequelize('natour', 'root', '', {
    host: process.env.HOST_DATABASE,
    post: process.env.PORT_HOST_DATABASE,
    dialect: 'mariadb',
    timezone: '+07:00',
    difine: {
        freezeTableName: true,
    },
    sync: { forcus: true },
    query: { raw: true },
});

const connectDatabase = async () => {
    try {
        await sequelize.authenticate();
        console.log('Connection has been established successfully.');
    } catch (error) {
        console.error('Unable to connect to the database:', error);
    }
};

export default connectDatabase;
