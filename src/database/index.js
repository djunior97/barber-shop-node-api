import 'dotenv/config';
import Sequelize from 'sequelize';
import User from '../app/models/User';
import databaseConfig from '../config/database';

const models = [User];

class Database {
  constructor() {
    this.init();
  }

  init() {
    const databaseUrl = process.env.DATABASE_URL;

    this.connection = new Sequelize(databaseUrl, databaseConfig);

    models.map(model => model.init(this.connection));
  }
}

export default new Database();
