import { sequelize } from '../Database/serviceDatabase';
import Sequelize from 'sequelize';

const HoaDonBanHang = sequelize.define('hoaDonBanHang', {
    idHoaDonBanHang: {
        type: Sequelize.DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
});

export default HoaDonBanHang;
