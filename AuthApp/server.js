require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const authRoutes = require('./routes/authRoutes');
const sequelize = require('./config/database').sequelize;

const app = express();
app.use(bodyParser.json());

app.use('/', authRoutes);

const PORT = process.env.PORT || 3000;

const startServer = () => {
      sequelize.sync()
            .then(() => {
                  console.log('Database synchronized successfully.');
            })
            .catch((error) => {
                  console.error('Error synchronizing database:', error);
            });

      app.listen(PORT, () => {
            console.log(`Server running on http://localhost:${PORT}`);
      });
}
startServer();