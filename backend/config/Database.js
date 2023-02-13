import { Sequelize } from "sequelize";

const db = new Sequelize('fullstackreact_db', 'root', '', {
    host: 'localhost',
    dialect: 'mysql'
});

export default db;