import { sequelize } from '../util/serviceDatabase';
const Sequelize = require('sequelize');

const User = sequelize.define('tb_user', {
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
        unique: true,
    },
    password: {
        type: Sequelize.DataTypes.STRING,
        allowNull: false,
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

// CREATE TABLE `user` (
// 	`id` INT(10) UNSIGNED NOT NULL AUTO_INCREMENT,
// 	`name` VARCHAR(255) NOT NULL DEFAULT '0' COLLATE 'utf8mb4_general_ci',
// 	`rule` VARCHAR(255) NOT NULL DEFAULT '"user"' COLLATE 'utf8mb4_general_ci',
// 	`email` VARCHAR(255) NOT NULL COLLATE 'utf8mb4_general_ci',
// 	`password` VARCHAR(255) NOT NULL COLLATE 'utf8mb4_general_ci',
// 	`photo` VARCHAR(255) NULL DEFAULT NULL COLLATE 'utf8mb4_general_ci',
// 	`active` TINYINT(1) NULL DEFAULT '1',
// 	PRIMARY KEY (`id`) USING BTREE,
// 	UNIQUE INDEX `email` (`email`) USING BTREE,
//  CHECK (`active > -1`)
// )
// COLLATE='utf8mb4_general_ci'
// ENGINE=InnoDB
// ;
