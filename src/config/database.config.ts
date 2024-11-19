import { SequelizeModuleOptions } from '@nestjs/sequelize';
require('dotenv').config();

export const safeDatabaseConfig: SequelizeModuleOptions = {
  dialect: 'postgres',
  host: process.env.DB_HOST,
  port: +process.env.DB_PORT,
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  autoLoadModels: true,
  synchronize: true,
  pool: {
    max: 10,
    min: 0,
    acquire: 30000,
    idle: 10000,
  },
};
