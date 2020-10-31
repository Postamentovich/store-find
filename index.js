const express = require('express');
const { getConfig } = require('./config');

const { PORT } = getConfig();
const app = express();

app.use(express.json({ extended: true }));
app.use('/api', require('./route/store.route'));

app.listen(PORT, () => console.log(`App has been started on port ${PORT}`));
