import mongoose from 'mongoose';
import { Sequelize } from 'sequelize';
import Category from '../app/models/Category.js';
import Products from '../app/models/Products.js';
import User from '../app/models/User.js';
import databaseConfig from '../config/database.cjs';

const models = [User, Products, Category];

class Database {
  constructor() {
    this.init();
    this.mongo();
  }

  init() {
    this.connection = new Sequelize(databaseConfig);

    models
      .map((model) => model.init(this.connection))
      .map(
        (model) => model.associate && model.associate(this.connection.models),
      );
  }

  mongo() {
    const mongoUri =
      process.env.MONGO_URI || 'mongodb://localhost:27017/devburguer';

    this.mongooseConnection = mongoose.connect(mongoUri);
  }
}

export default new Database();
