const { Sequelize } = require('sequelize');

const sequelize = new Sequelize({
      dialect: 'mssql',
      host: process.env.DB_HOST || 'localhost',
      port: process.env.DB_PORT || 1433,
      username: process.env.DB_USERNAME || 'sa',
      password: process.env.DB_PASSWORD || 'yourpassword',
      database: process.env.DB_NAME || 'AuthAppDB',
      dialectOptions: {
            options: {
                  encrypt: true,
                  trustServerCertificate: true
            }
      },
      logging: console.log,
      pool: {
            max: 5,
            min: 0,
            acquire: 30000,
            idle: 10000
      }
});

const testConnection = async () => {
      try {
            await sequelize.authenticate();
            console.log('Database connection has been established successfully.');
      } catch (error) {
            console.error('Unable to connect to the database:', error);
      }
};

module.exports = {
      sequelize,
      testConnection
};
