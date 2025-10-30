module.exports = {
  dialect: 'postgres',
  host: process.env.DB_HOST || 'localhost',
  port: Number(process.env.DB_PORT || 5432),
  username: process.env.DB_USER || 'admin',
  password: process.env.DB_PASS || '',
  database: process.env.DB_NAME || 'dev-burguer-db',
  define: {
    timestamps: true,
    underscored: true,
    underscoredAll: true,
  },
};
