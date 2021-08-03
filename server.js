const express = require('express');
const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

require('./routes/todo/to-do-app')(app);
require('./config/mongodb');

app.listen(PORT, () => console.log('Server is listening on port 5000'));
