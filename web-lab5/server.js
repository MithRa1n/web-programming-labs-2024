const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const sequelize = require('./config/db.config');
const movieRoutes = require('./routes/movies'); 

const app = express();
const PORT = process.env.PORT || 5050;

app.use(bodyParser.json());
app.use(cors());

app.get('/', (req, res) => {
    res.json({ message: "Сервер працює!" });
});

app.use('/api/movies', movieRoutes);

sequelize.sync({ force: true }).then(() => {
    console.log("База даних синхронізована.");
    app.listen(PORT, () => {
        console.log(`Сервер запущено на порту ${PORT}`);
    });
});
