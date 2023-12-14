const express = require('express');
const cors = require('cors');

const { port } = require('./config');
const router = require('./routes');
const { initDB } = require('./models');

const app = express();
initDB();

app.use(cors());
app.use(express.json());
app.use(router);

app.listen(port, () => {
  console.log(`Server running on ${port}`);
});
